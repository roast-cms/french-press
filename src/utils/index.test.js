// import { focusEvents } from "./events-focus";
// import { addLink, formatCommand, menuPosition } from "./actions-format";
import {
  // imageButtonPosition,
  // handleImageButton,
  // handleFileUpload,
  forceImageRestrictions,
  fileToBase64
} from "./actions-image";
// import {
//   loadContent,
//   loadTextContent,
//   storeContentState,
//   saveContent,
//   setDraftStatusHelper
// } from "./actions-storage";

test("File to data-uri converter return data-uri if a valid one is provided", () => {
  const validData = "data:image/png;base64,iVBORw0KGgoA";
  return fileToBase64(validData).then(string =>
    expect(string).toEqual(validData)
  );
});
test("File to data-uri converter return error if an invalid input type provided", () => {
  const invalidData = "asdf";
  return expect(fileToBase64(invalidData)).rejects.toEqual({
    error: "TypeError: parameter must be a File/blob or a data-uri string."
  });
});

test("Reject images over 10mb via forceImageRestrictions()", () => {
  return expect(forceImageRestrictions(10000001, "image/jpeg")).rejects.toEqual(
    "size"
  );
});
test("Reject images over custom size via forceImageRestrictions()", () => {
  return expect(
    forceImageRestrictions(1000001, "image/jpeg", 1)
  ).rejects.toEqual("size");
});
test("Reject GIF (unsupported) image mime via forceImageRestrictions()", () => {
  return expect(forceImageRestrictions(10000000, "image/gif")).rejects.toEqual(
    "mime"
  );
});
