// @ts-ignore
const { ym } = typeof window !== 'undefined'
  ? window
  : {};

const YMID = 50268295;

export default function event(eventName) {
  if (!ym) {
    return null;
  }
  
  return ym(YMID, 'reachGoal', eventName);
}
