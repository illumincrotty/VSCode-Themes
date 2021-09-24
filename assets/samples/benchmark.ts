import bench from 'benny';
import { summarize } from './benchmarkUtilities';

/***************************************************************************************/
/*                                                                                     */
/*    Divide by 2 Results:                                                             */
/*                                                                                     */
/*    Shift down >>:  1,388,798,255 operations/second ±  0.08% | Fastest               */
/*    Divide:         1,388,083,491 operations/second ±  0.17% | 2nd | 0.05% slower    */
/*    Shift down >>>: 1,385,662,698 operations/second ±  0.17% | 3rd | 0.23% slower    */
/*    Math imul:      1,373,828,684 operations/second ±  0.47% | 4th | 1.08% slower    */
/*    Multiply .5:    1,372,609,724 operations/second ±  0.71% | 5th | 1.17% slower    */
/*                                                                                     */
/***************************************************************************************/

void bench.suite(
	'Divide by 2',

	// Common
	bench.add('Multiply .5', () => 100 * 0.5),
	bench.add('Divide', () => 100 / 2),

	// Bitwise
	bench.add('Shift down >>', () => 100 >> 2),
	bench.add('Shift down >>>', () => 100 >>> 2),

	// Other
	bench.add('Math imul', () => Math.imul(100, 0.5)),

	bench.complete(summarize)
);
