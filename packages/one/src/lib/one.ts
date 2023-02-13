import { two } from '@vnextjs/two';
import { four } from '@katerina/four';

export function one(): string {
  console.log(four());
  console.log(two());
  return 'one';
}
