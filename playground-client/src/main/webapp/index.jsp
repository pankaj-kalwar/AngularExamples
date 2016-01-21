<%@ page pageEncoding="UTF-8" %>
<!doctype html>
<html id="ng-app" lang="nl" ng-app="app">
	<head>
    	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    	<%@include file="/head.jspf" %>
	</head>
	<body ng-controller="PlayCtrl">
		<div>
			<header><div>Angular playground ...</div></header>
    		<main role="main" class="clear">
        		<div id="display" ng-view></div>
        	</main>
    		<footer>Copyright &copy 2016 by Amit Dixit <span>All rights reserved</span></footer>
    	</div>
		<%@include file="/scripts.jspf" %>
	</body>
</html>
