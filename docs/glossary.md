# Glosario

## Socket

1\. A way to speak to other programs using standard Unix file descriptors. There are DARPA Internet addresses (Internet Sockets), path names on a local node (Unix Sockets), CCITT X.25 addresses (X.25 Sockets that you can safely ignore), and probably many others depending on which Unix flavor you run. 

There are two types of Internet Sockets: One is "Stream Sockets"; the other is "Datagram Sockets", which may hereafter be referred to as "SOCK_STREAM" and "SOCK_DGRAM", respectively. 

http://www.beej.us/guide/bgnet/output/html/multipage/theory.html

2\. A socket is one endpoint of a two-way communication link between two programs running on the network. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to.

http://docs.oracle.com/javase/tutorial/networking/sockets/definition.html

## File descriptor

A file descriptor is simply an integer associated with an open file: network connection, a FIFO, a pipe, a terminal, a real on-the-disk file, or just about anything else. Everything in Unix is a file!

## Internet

"Internet" refers to the global information system that -- 

(i) is logically linked together by a globally unique address space based on the Internet Protocol (IP) or its subsequent extensions/follow-ons;

(ii) is able to support communications using the Transmission Control Protocol/Internet Protocol (TCP/IP) suite or its subsequent extensions/follow-ons, and/or other IP-compatible protocols; and 

(iii) provides, uses or makes accessible, either publicly or privately, high level services layered on the communications and related infrastructure described herein." 

https://www.nitrd.gov/fnc/Internet_res.aspx
