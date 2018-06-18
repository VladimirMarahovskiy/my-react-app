<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>App</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>
<body>
<div id="root"></div>
<div id="root1"></div>
<div id="root2"></div>
<div id="root3"></div>
<div id="root4"></div>
<div id="root5"></div>
<div id="root6"></div>


<script type="text/babel">

    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
    );

    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;

    ReactDOM.render(
        element,
        document.getElementById('root1')
    );

    function tick() {
        const element = (
            <div>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root2'));
    }

    setInterval(tick, 1000);

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    const comp = <Welcome name="Sara" />;
    ReactDOM.render(
        comp,
        document.getElementById('root3')
    );

    class Welcome2 extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }


    const comp1 = <Welcome2 name="Sar123a" />;
    ReactDOM.render(
        comp1,
        document.getElementById('root4')
    );

    function App() {
        return (
            <div>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
                <Welcome2 name="Edite" />
                <Welcome2 name="Edite" />
                <Welcome2 name="Edite" />
            </div>
        );
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root5')
    );

    function Clock(props) {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    function tick2() {
        ReactDOM.render(
            <Clock date={new Date()} />,
            document.getElementById('root6')
        );
    }
    setInterval(tick2, 1000);


</script>
</body>
</html>