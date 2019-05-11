function getDevToolsHook () {
  if ( typeof window !== 'undefined' ) return (window as any)['__REACT_DEVTOOLS_GLOBAL_HOOK__'];
  if ( typeof global !== 'undefined' ) return (global as any)['__REACT_DEVTOOLS_GLOBAL_HOOK__'];
}

function isRawType ( x: any ) {
  const type = typeof x;

  return type === 'string' || type === 'number' || type === 'boolean' || type === 'undefined' || x === null;
}

const hook = getDevToolsHook();

const checkUpdate = (event: any) => {
  const type = event.data.type;
  if ( isRawType ( type ) ) return;
  if (event.data.nodeType === 'Special') return;
  // Do not log out the Connect components
  if (Object.keys(event.data.props).length === 0) return;

  const name = ( event.data.name !== 'TODO_NOT_IMPLEMENTED_YET' ) ? event.data.name : type.name || 'Anonymous';
  console.warn(`${name} did update when the state did not change.`, event.data.props, event.data.state);
};

const stop = () => {
  if (hook) {
    console.debug('Unmounting hook');
    hook.off('update', checkUpdate);
  }
};

/*
 * The hook as to wait for the DevTools to connect to React.
 */
const updateHook = new Promise<() => void>((resolve, reject) => {
  let mounted = false;

  if (!hook) {
    console.log('Redux Minesweeper: No devTools hook found');
    reject(new Error('no Devtools hook found'));
  } else {
    hook.on('root', () => {
      mounted = true;
      hook.on('update', checkUpdate);
      resolve(stop);
    });

    setTimeout(() => {
      if (!mounted) {
        console.log('Connect to React Devtools and reload the page to use Redux Minesweeper.');
      }
    }, 4000);
  }
});

export default updateHook;
