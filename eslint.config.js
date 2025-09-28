//@ts-check
import eslintBits from '@repo/eslint';
export default eslintBits('./tsconfig.json', {
    ignores: ['apps', 'packages']
});
