<%@ page pageEncoding="UTF-8" %>
<!doctype html>
<html id="ng-app" lang="nl" ng-app="app">
	<head>
    	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    	<%@include file="/head.jspf" %>
	</head>
	<body >
		<div>
			<header><div>File Upload POC</div></header>
    		<main role="main" class="clear">
    			<br /><br /><br />
    			<div>
    				<h1><a href="#/fileUpload" >File Upload</a></h1>    				
    			</div>
        		<div id="display" ng-view=""></div>
        	</main>
    		<footer>Copyright 2016<span>All rights reserved</span></footer>
    	</div>
		<%@include file="/scripts.jspf" %>
	</body>
</html>
