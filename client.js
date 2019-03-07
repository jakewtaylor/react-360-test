import { ReactInstance, Surface } from 'react-360-web';

const init = (bundle, parent, options = {}) => {
    const r360 = new ReactInstance(bundle, parent, {
        fullScreen: true,
        ...options,
    });

    const panel = new Surface(500, 150, Surface.SurfaceShape.Flat);
    panel.setAngle(0, 0);

    r360.renderToSurface(
        r360.createRoot('StarViewer'),
        panel,
    );

    r360.compositor.setBackground(
        r360.getAssetURL('stars_scaled.jpg'),
    );
};

window.React360 = { init };
