//https://leetcode.com/problems/design-browser-history/
/**
 * @param {string} homepage
 */

class Homepage {
  constructor(homepage) {
    this.homepage = homepage;
    this.prev = null;
    this.next = null;
  }
}
class BrowserHistory {
  constructor(homepage) {
    let newPage = new Homepage(homepage);
    this.head = newPage;
    this.current = newPage;
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    let newPage = new Homepage(url);
    this.current.next = newPage;
    newPage.prev = this.current;
    this.current = newPage;
    return null;
  }

  /**
   * @param {number} steps
   * @return {string}
   */

  back(steps) {
    while (this.page.prev && steps) {
      this.current = this.current.prev;
      --steps;
    }
    return this.current.homepage;
  }
  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    while (this.current.next && steps) {
      this.current = this.current.next;
      --steps;
    }
    return this.current.homepage;
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
