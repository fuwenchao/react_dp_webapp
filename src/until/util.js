export default {
	const rootPath='/',

	goBack: function (route=rootPath) {
        const backRouter = route
        this.props.handleBack(backRouter);
	}

}