function NameShortner(name, maxLength) {
  return name.substring(0, maxLength) + '...';
}

console.log(NameShortner("Rahul", 2));
