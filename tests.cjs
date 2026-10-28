const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const context={window:{},document:{getElementById:()=>({}),documentElement:{style:{setProperty(){}}}},URLSearchParams,location:{hash:''},console};
vm.createContext(context);vm.runInContext(fs.readFileSync('config.js','utf8'),context);
const source=fs.readFileSync('app.js','utf8');vm.runInContext(source.slice(0,source.indexOf('function display')),context);
const c=context.window.QUIZ_CONFIG,calc=context.window.calculateResult;
assert.equal(c.questions.length,10);assert.equal(c.profiles.length,4);
c.questions.forEach(q=>{assert.equal(q.options.length,4);q.options.forEach(o=>{assert.equal(o.scores.length,4);assert.equal(o.scores.reduce((a,b)=>a+b,0),3);});});
c.profiles.forEach((p,i)=>{assert.equal(p.strengths.length,3);assert.equal(p.challenges.length,2);assert.ok(p.description.split(/\s+/).length>=90);assert.equal(calc(Array(10).fill(i)).profile.id,p.id);});
assert.throws(()=>calc([]));assert.throws(()=>calc(Array(10).fill(4)));
assert.equal(calc([0,0,0,0,0,1,1,1,1,1]).profile.id,'equilibrado');
for(let n=0;n<4**10;n++){let v=n;const a=Array.from({length:10},()=>{const r=v%4;v=Math.floor(v/4);return r;});const counts=[0,0,0,0];a.forEach(i=>counts[i]++);const max=Math.max(...counts);const expected=a.slice().reverse().find(i=>counts[i]===max);const actual=calc(a);assert.equal(actual.profile.id,c.profiles[expected].id);assert.equal(actual.scores.reduce((a,b)=>a+b,0),30);}
console.log('OK: 10 perguntas, 4 perfis, conteúdo, entradas inválidas, pontuação e desempates em 1.048.576 combinações.');
