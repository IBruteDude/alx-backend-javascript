export default function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);

  const dv = new DataView(buf);
  dv.setInt8(position, value);
  return dv;
}

// It should accept three arguments: length (Number), position (Number), and value (Number).

// If adding the value is not possible the error Position outside range should be thrown.
