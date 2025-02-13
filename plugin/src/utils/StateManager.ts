interface IStateManager {
  get: (key: string) => any
  set: (key: string, value: any) => void
  remove: (key: string) => void
}

const STORAGE_KEY = 'pluginConfig'

export function StateManager(): IStateManager {
  const state = new Map<string, any>();

  const storedConfig = localStorage.getItem(STORAGE_KEY);
  if (storedConfig) {
    const parsedConfig = JSON.parse(storedConfig);
    Object.entries(parsedConfig).forEach(([key, value]) => state.set(key, value));
  }

  return {
    get: (key) => state.get(key),

    set: (key, value) => {
      state.set(key, value);

      const updatedConfig = Object.fromEntries(state);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedConfig));
    },

    remove: (key) => {
      state.delete(key);

      const updatedConfig = Object.fromEntries(state);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedConfig));
    }
  };
}

export const state = StateManager()