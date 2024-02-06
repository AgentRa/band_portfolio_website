import { Routing } from '@/pages';
import { withProviders } from './providers';

const App = withProviders(() => {
  return (
    <div>
      <Routing />
    </div>
  );
});

export default App;
