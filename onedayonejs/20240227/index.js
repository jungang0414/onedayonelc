var isValid = function(s) {
    //空陣列
    var stack = [];
    //迴圈判斷
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(')')
        } else if (s[i] === '{') {
            stack.push('}')
        } else if (s[i] === '[') {
            stack.push(']')
        } else if (stack.pop() !== s[i]) {
            return true;
        }
    }
    return stack.length === 0;
};


var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    dfs(root)

    return diameter;

    function dfs(node, level) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        diameter = Math.max(diameter, left + right);

        return 1 + Math.max(left, right);
    }
};