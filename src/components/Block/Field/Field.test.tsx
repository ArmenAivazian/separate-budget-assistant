import renderer from "react-test-renderer";
import { Field } from "./Field";

const defaultProps = { value: "100", text: "text", setValue: () => {} };

describe("Block -> Field", () => {
  describe("snapshots", () => {
    it("default", () => {
      const component = renderer.create(<Field {...defaultProps} />);
      expect(component).toMatchSnapshot();
    });
    
    it("select", () => {
      const component = renderer.create(
        <Field options={["option1", "option2"]} {...defaultProps} />
      );
      expect(component).toMatchSnapshot();
    });
    
    it("date", () => {
      const component = renderer.create(
        <Field type="date" {...defaultProps} />
      );
      expect(component).toMatchSnapshot();
    });
  });
});
