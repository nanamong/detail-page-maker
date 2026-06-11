import { timingSafeEqual } from "node:crypto";

function parseKeys(value?: string) {
  return (value || "")
    .split(/[\n,]/)
    .map((key) => key.trim())
    .filter(Boolean);
}

function secureEquals(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function isKnowledgeAccessRequired() {
  return false;
}

export function canUseCommonKnowledge(inputKey: string) {
  return true;
}

export function isKnowledgeAdminRequired() {
  return false;
}

export function canManageCommonKnowledge(inputKey: string) {
  return true;
}
