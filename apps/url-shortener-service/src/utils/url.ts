import Sqids from "sqids";

const sqids = new Sqids({
  minLength: 7,
});

export function encodeId(id: number): string {
  return sqids.encode([id]);
}

export function decodeId(shortCode: string): number | null {
  const result = sqids.decode(shortCode);

  if (result.length === 0) {
    return null;
  }

  return Number(result[0]);
}
