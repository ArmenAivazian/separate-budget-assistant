import renderer from "react-test-renderer";

import { Block } from "./Block";

describe("Block", () => {
  describe("snapshots", () => {
    it("default", () => {
      const component = renderer.create(
        <Block
          title="title"
          list={[
            { value: "value", text: "text", setValue: () => {} },
            { value: "value2", text: "text2", setValue: () => {} },
          ]}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
