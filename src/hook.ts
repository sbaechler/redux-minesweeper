function getDevToolsHook () {
  if ( typeof window !== 'undefined' ) return (window as any)['__REACT_DEVTOOLS_GLOBAL_HOOK__'];
  if ( typeof global !== 'undefined' ) return (global as any)['__REACT_DEVTOOLS_GLOBAL_HOOK__'];
}

function isRawType ( x: any ) {
  const type = typeof x;

  return type === 'string' || type === 'number' || type === 'boolean' || type === 'undefined' || x === null;
}


const hook = getDevToolsHook ();
hook.sub ( 'update', (event: any) => {
  const type = event.data.type;
  if ( isRawType ( type ) ) return;
  if (event.data.nodeType === 'Special') return;

  const name = ( event.data.name !== 'TODO_NOT_IMPLEMENTED_YET' ) ? event.data.name : type.name || 'Anonymous';

  console.log(event.data);
  console.warn(`${name} did update when the state did not change.`, event.data.props, event.data.state);
});
