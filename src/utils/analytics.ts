
export const getVisitorInfo = () => {
    const visitor = {
        userAgent: navigator.userAgent,
        appVersion: navigator.appVersion,
        platform: navigator.platform,
        vendor: navigator.vendor
    }
    return visitor;
}
