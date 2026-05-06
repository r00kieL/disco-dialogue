const dialogue = {
  1: {
    speaker: "古老的爬虫脑",
    textList: [
      {
        text: "这里什么也没有。只有温暖的，原始的黑暗。你的意识在这里发酵——并不比一粒麦芽大多少。你不必再做任何事情了。",
        key: 1
      },
      {
        text: "永远",
        key: 2
      },
      {
        text: "永远的永远。",
        key: 3
      },
    ],
    options: [
      {
        label: "永远永远的永远?",
        key: 1,
        nextId: 2
      },
      {
        label: "(简单地保持这种不存在的状态。)",
        key: 2,
        nextId: 2
      }
    ],
  },
  2: {
    speaker: "古老的爬虫脑",
    textList: [
      {
        text: "时间在这里汹涌的流逝。它是湮没了一切呻吟的终极宁静。没有留下任何旧日依恋",
        key: 1
      }
    ],
    options: [
      {
        label: "这真是太棒了!",
        key: 1,
        nextId: 3
      },
      {
        label: "再多来一些",
        key: 2,
        nextId: 3
      },
      {
        label: "那个*旧*什么的是个什么东西?",
        key: 3,
        nextId: 3
      }
    ],
  },
}

export { dialogue }