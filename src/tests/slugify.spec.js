import { describe, it } from "mocha";
import { expect } from "chai";

import { slugify } from "../slugify.js";

describe("[slugify]", () => {
  it("should remove spaces and replace with hypens", () => {
    const slug = slugify("should have 0 spaces and hyphenated");

    expect(slug).to.be.equal("should-have-0-spaces-and-hyphenated");
  });
  it("should remove special characters", () => {
    const specialCharacters = "`~!@#$%^&*()_|+-=?;:'\",.<>{}[]";
    const slug = slugify(specialCharacters);

    expect(slug).to.be.equal("");
  });
  it("should lowercase", () => {
    const slug = slugify("LOWERCASE");

    expect(slug).to.be.equal("lowercase");
  });

  it("should remove accents", () => {
    const slug = slugify("Não");
    expect(slug).to.be.equal("nao");
  });
});
