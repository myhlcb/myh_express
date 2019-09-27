import test from 'ava';

test ('foo', t => {
  t.pass ();
});

test ('bar', async t => {
  console.log (1111);
  const bar = Promise.resolve ('bar');
  t.is (await bar, 'bar');
});
