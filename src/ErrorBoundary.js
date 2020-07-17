import * as React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // static getDerivedStateFromError(error) {
    //     // Оновити стан, щоб наступний рендеринг показав резервний інтерфейс користувача.
    //     return { hasError: true };
    // }

    componentDidCatch(error, info) {
        // Приклад "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log(error,info);
        this.setState({
        hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            // Ви можете рендерити будь-який власний резервний інтерфейс користувача
            return <h1>Щось пішло не так.</h1>;
        }

        return this.props.children;
    }
}
