type SVGComponentType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export type FeatureProps = {
  description: string;
  icon: SVGComponentType;
  title: string;
};
