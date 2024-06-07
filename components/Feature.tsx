import { UniformRichText } from "@uniformdev/canvas-next";
import {
  registerUniformComponent,
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-react";

type Asset = {
  fields: {
    url: {
        value: string;
    }
  }
};

type FeatureProps = ComponentProps<{
  title: string;
  description?: string;
  image?: Asset[];
}>;

const Feature: React.FC<FeatureProps> = ({ title, description, image }) => {
    console.log(image);
 return ( <div className="feature-container">
    {image && image.length > 0 && (
      <img src={image[0].fields.url.value} alt="Feature image" className="feature-image" />
    )}
    <div className="text-container">
      <UniformText
        className="title"
        parameterId="title"
        as="h1"
        data-test-id="feature-title"
        placeholder="Feature title goes here"
      />
      <UniformRichText
        parameterId="description"
        className="description"
        data-test-id="feature-description"
      />
    </div>
  </div>
);
}

registerUniformComponent({
  type: "feature",
  component: Feature,
});

export default Feature;
