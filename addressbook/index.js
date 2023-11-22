(async () => {
  const { User } = await import('./user.mjs');
  const { Pet } = await import('./pet.mjs');

  console.log(User);

  const klaus = new User('Klaus', 'Müller');

  console.log(klaus.fullname);

  const cat = new Pet('cat');

  console.log(cat.fullname);
})();
