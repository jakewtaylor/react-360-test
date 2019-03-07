import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton,
} from 'react-360';

export default class StarViewer extends React.Component {
    state = {
        showGreeting: true,
    }

    dismiss = () => {
        this.setState({ showGreeting: false });
    }

    render() {
        const { showGreeting } = this.state;

        return showGreeting ? (
            <View style={styles.panel}>
                <Text style={styles.greeting}>Welcome to the Star Viewer.</Text>
                <Text style={styles.greeting}>Use your mouse to move around.</Text>

                <VrButton onClick={this.dismiss} style={styles.button}>
                    <Text>Hide</Text>
                </VrButton>
            </View>
        ) : null;
    }
};

const styles = StyleSheet.create({
    panel: {
        width: 500,
        height: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },

    greeting: {
        fontSize: 24,
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 4,
    },

    button: {
        backgroundColor: 'rgba(0, 106, 255, 1)',
        padding: 4,
        borderRadius: 4,
        minWidth: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

AppRegistry.registerComponent('StarViewer', () => StarViewer);
