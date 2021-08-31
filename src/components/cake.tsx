import { CakePreview } from "../data/cakes"

export type Props = {
  cake: CakePreview
}

export const Cake = (props: Props) => {
  const { cake } = props;
  return <div className="cake-item">
    <img alt={cake.imageAlt} src={cake.imageSrc} />
    <aside>
      <h3>{cake.title}</h3>
      <p>{cake.description}</p>
    </aside>
  </div>
}
