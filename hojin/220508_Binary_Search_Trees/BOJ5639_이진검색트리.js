class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let input = []; // input 배열 선언
let answer = "";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pushNode = (node, no) => {
  if (no < node.val) {
    if (!node.left) {
      node.left = new Node(no);
    } else {
      pushNode(node.left, no);
    }
  } else {
    if (!node.right) {
      node.right = new Node(no);
    } else {
      pushNode(node.right, no);
    }
  }
};

const postOrder = (node) => {
  if (node.left) {
    postOrder(node.left);
  }
  if (node.right) {
    postOrder(node.right);
  }
  answer += node.val + "\n";
};

const solution = (input) => {
  const root = new Node(input[0]);
  const len = input.length;
  for (let i = 1; i < len; ++i) {
    pushNode(root, input[i]);
  }
  postOrder(root);
  console.log(answer);
};

rl.on("line", function (line) {
  input.push(Number(line.trim())); // 입력받는 각 줄의 값을 input 배열에 저장
}).on("close", function () {
  solution(input);
  process.exit();
});
