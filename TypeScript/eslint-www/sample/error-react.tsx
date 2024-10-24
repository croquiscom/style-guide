import React from 'react';

// react/jsx-no-undef
// @ts-expect-error force error
<NoUndef name='John' />;

// react/require-render-return
export class RequireReturn extends React.Component {
  // @ts-expect-error force error
  render() {
    <div>Hello, World!</div>;
  }
}

// react-hooks/exhaustive-deps
export const ExhaustiveDeps: React.FC<{ visible: boolean }> = ({ visible }) => {
  React.useEffect(() => {
    if (visible) {
      console.log('visible');
    } else {
      console.log('hidden');
    }
  }, []);
  return <div>Hello, World!</div>;
};
