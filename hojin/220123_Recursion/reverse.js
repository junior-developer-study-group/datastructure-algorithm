function reverse(str) {
  if (str === "") return "";
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
