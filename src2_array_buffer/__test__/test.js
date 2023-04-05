import ArrayBufferConverte from "../ArrayBufferConverte.mjs";
import getBuffer from "../getBuffer.mjs";

test("test getBuffer", () => {
    let resLength = getBuffer().byteLength
    expect(resLength).toBe(106)
    
}) 