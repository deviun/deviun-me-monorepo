// @ts-ignore
const { ym } = typeof window !== 'undefined'
  ? window
  : {};
const isProd = process.env.NODE_ENV === 'production';

const YMID = 50268295;

export default function event(eventName) {
  if (!ym || !isProd) {
    return null;
  }
  
  return ym(YMID, 'reachGoal', eventName);
}
