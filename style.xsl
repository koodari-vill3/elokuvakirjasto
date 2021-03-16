<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Elokuvakirjasto</title>
                <style>
                    .Elokuva {
                        border: 1px solid black;
                        margin: 10px;
                        padding: 5px;
                        border:1px solid rgb(41, 76, 233);
                        background-color: rgb(142, 231, 238);
                        font-size: 15px;
                        font-family: monospace;
                    }

                </style>
            </head>
            <body>
                <h1>Elokuvakirjasto</h1>
                <hr/>
                <xsl:for-each select="Elokuvakirjasto/Elokuva">
                    
                    <div class="Elokuva">
                        <h1><xsl:value-of select="Nimi"/></h1>
                        <h2><xsl:value-of select="Ohjaaja"/></h2>
                        <h3><xsl:value-of select="Julkaisuvuosi"/></h3>
                        <h4><xsl:value-of select="Ikäraja"/></h4>
                        <h5><xsl:value-of select="Pituus"/></h5>
                        <h6><xsl:value-of select="Kieli"/></h6>
                        <h7><xsl:value-of select="Budjetti"/></h7>
                        <p><xsl:value-of select="Genre"/></p>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>