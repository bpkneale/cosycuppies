import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { AnalyticEvent, CosyState } from "../state/cosy";
import { getVisitorInfo } from "../utils/analytics";
import { ApiClient } from "../api/client";
import { clearAnalytics } from "../actions/cosy";

type ComponentProps = {
}

type StateProps = {
    events: AnalyticEvent[];
}

type DispatchProps = {
    clearAnalyticEvents: () => void;
}

type Props = ComponentProps & StateProps & DispatchProps;

class AnalyticsUnc extends React.Component<Props> {
    _timeout: number | null = null;
    _enable: boolean = !window.location.host.includes("localhost")

    async analyticsInterval() {
        const { events, clearAnalyticEvents } = this.props;

        if(events.length > 0) {
            const client = new ApiClient();
            const data = [...events];
            clearAnalyticEvents();
            if(this._enable) {
                await client.submitAnalytics("bulk", data);   
            }
        }

        this._timeout = window.setTimeout(this.analyticsInterval.bind(this), 30000);
    }

    componentDidUpdate() {
        const { events, clearAnalyticEvents } = this.props;
        if(events.length > 0) {
            const client = new ApiClient();
            if(this._enable) {
                for(const event of events) {
                    client.submitAnalytics(event.action, event.data);
                }
            }
            clearAnalyticEvents();
        }
    }

    componentDidMount() {
        const visitor = getVisitorInfo();
        const client = new ApiClient();
        if(this._enable) {
            client.submitAnalytics("visitor", visitor);
        }
        // this._timeout = window.setTimeout(this.analyticsInterval.bind(this), 30000);
    }

    componentWillUnmount() {
        if(this._timeout !== null) {
            window.clearTimeout(this._timeout);
            this._timeout = null;
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = (state: CosyState) => ({
    events: state.analytics
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    clearAnalyticEvents: () => dispatch(clearAnalytics())
})

export const Analytics = connect<StateProps, DispatchProps, ComponentProps, CosyState>(mapStateToProps, mapDispatchToProps)(AnalyticsUnc);
