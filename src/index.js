let nums = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ')
let tens = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');

module.exports = function toReadable(number) {
    let result = [];

    if (number < 20) {
        result.push(nums[number]);
        return result.join(' ').trim();
    } else if (number < 100) {
        result.push(tens[Math.floor(number / 10) - 2]);
        if (number % 10 !== 0) {
            result.push(nums[number % 10]);
        }

        return result.join(' ').trim();
    } else if (number < 1000) {
        result.push(nums[Math.floor(number / 100)] + ' hundred');
        if (number % 100 !== 0) result.push(toReadable((number % 100)));
        return result.join(' ').trim()
    }
}
