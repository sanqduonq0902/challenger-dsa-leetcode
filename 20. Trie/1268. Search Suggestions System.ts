class TrieNode {
  children: Map<string, TrieNode>;
  suggestions: string[];

  constructor() {
    this.children = new Map();
    this.suggestions = [];
  }
}

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch)!;
      node.suggestions.push(word);
      node.suggestions.sort();
      if (node.suggestions.length > 3) node.suggestions.pop();
    }
  }

  search(prefix: string): string[][] {
    const result: string[][] = [];
    let node = this.root;
    for (const ch of prefix) {
      if (node && node.children.has(ch)) {
        node = node.children.get(ch)!;
        result.push([...node.suggestions]);
      } else {
        result.push([]);
        node = null as any;
      }
    }
    return result;
  }
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort();
  const trie = new Trie();
  for (const p of products) trie.insert(p);
  return trie.search(searchWord);
}

