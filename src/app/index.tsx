import { Routing } from '@/pages';
import { withProviders } from './providers';

const App = withProviders(() => {
  return (
    <div className="app flex justify-center">
      <Routing />
    </div>
  );
});

export default App;
