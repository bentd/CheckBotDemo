<%@ Page Language="C#" Inherits="CheckBot.Default" %>
<!DOCTYPE html>
<html>
<head runat="server">
	<title>Default</title>
    <link type="text/css" runat="server" rel="stylesheet" media="all" href="~/custom.css" />


</head>
<body>
	<form id="form1" runat="server">
    <div class="center" >                    
        <h1 class="display-4">CheckBot</h1>
                
        <p> CheckBot powered by Team Hello World, is capable of reading text and handwriting from checks.</p>
        <p> Click Here for a Sample Check to try it out!</p>
                
        <asp:Button id="changeSample" runat="server" Text="New Image" OnClick="changeSample_Click"/>
                
        <asp:Button id="resultsButton" runat="server" Text="Deposit Check" OnClick="resultsButton_Click"/>
        <asp:Label id="label" runat="server" Text="This is a label"/>
                
        <asp:Image id="imageSample" runat="server" ImageUrl="~/images/check_14.png"/>
                
        <p> Want to try your own check? Upload Here</p>
                
        <input type="file" name="file" />
        <asp:Button id="uploadButton" runat="server" Text="Deposit Check" OnClick="uploadButton_Click"/>
    </div>
	</form>
</body>
</html>
