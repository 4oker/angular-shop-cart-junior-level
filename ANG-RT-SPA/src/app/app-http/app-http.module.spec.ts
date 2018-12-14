import { AppHttpModule } from './app-http.module';

describe('AppHttpModule', () => {
  let appHttpModule: AppHttpModule;

  beforeEach(() => {
    appHttpModule = new AppHttpModule();
  });

  it('should create an instance', () => {
    expect(appHttpModule).toBeTruthy();
  });
});
