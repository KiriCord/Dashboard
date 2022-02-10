export function inDev(): boolean {
  return process.env['NODE_ENV'] == 'development'; // return process.env.NODE_ENV
}
