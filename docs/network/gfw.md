## 法律法规

[《计算机信息网络国际联网安全保护管理办法》](http://www.gov.cn/gongbao/content/2011/content_1860856.htm)

**第五条**　任何单位和个人不得利用国际联网制作、复制、查阅和传播下列信息：
（一）煽动抗拒、破坏宪法和法律、行政法规实施的；
（二）煽动颠覆国家政权，推翻社会主义制度的；
（三）煽动分裂国家、破坏国家统一的；
（四）煽动民族仇恨、民族歧视，破坏民族团结的；
（五）捏造或者歪曲事实，散布谣言，扰乱社会秩序的；
（六）宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖，教唆犯罪的；
（七）公然侮辱他人或者捏造事实诽谤他人的；
（八）损害国家机关信誉的；
（九）其他违反宪法和法律、行政法规的。

## 墙

GFW：Great Fire Wall，主要目的在于过滤国外反动信息，维护国家统一稳定，对不配合中国审查的互联网服务提供商，通过GFW禁止其在国内提供服务。

## 线路

### CN2

China Telecom Next Carrier Network，中国电信下一代承载网络。相比老一代（当前在用）的163骨干网，特点是更加的通畅，也搭载了很先进的QoS[^1]技术，主要面向政企大客户，来保证高质量的国际访问，缺点则是价格非常高，个人用户很少。

CN2分为CN2GT（Global Transit）和CN2GIA（Global Internet Access），CN2GT价格相对较便宜，但是出国线路拥堵程度较一般；CN2GIA是线路最通畅、理论上最稳定的，但价格也是最贵的。

### BGP

Border Gateway Protocol，边界网关协议。BGP机房一般也叫多线机房，可以自动识别网络运行商，并自动选择最适合连接服务器的线路，在当前网络不同时还会自动切换到其他路线来连接服务器。

三大巨头线路：Google Cloud Platform、Amazon Web Service、Azure。不建议使用，原因是其分别有流量贵、流量少、申请麻烦、需双币信用卡支付等问题和门槛，且不针对国内市场业务，存在网络不稳定的情况。

PCCW线路，香港电讯盈科提供的线路，到大陆走的是PCCW自己接的直连。目前看来，PCCW是较好的选择。

### IPLC

International Private Leased Circuit，国际私有租用线路，即国际专线。特点是IPLC不过GFW审查，所以不存在被墙的问题，同时也是最好的游戏加速线路。缺点是价格极高但带宽低流量小或流量倍率高，购买需谨慎。

### IEPL

International Ethernet Private Line

## 翻墙方式

### 软件

VPN

Shadowsocks

Quantumult

QuantumultX

Surge

Surfboard

Clash

---

### 硬件

---

### 网关

---


## VPN

### 协议

采用TCP通讯协议

PPTP

L2TP

openVPN

SSTP

### 常见VPN

主流VPN：Lantern、Astrill、NordVPN、ExpressVPN等

小众VPN：WireGuard，由于采用UDP通讯协议，GFW无法通过有效手段进行封锁，但UDP流量极容易被QoS限速，不建议使用。

---

## VPS

### 主机选择

Linode

Vultr

Bandwagon

DigitalOcean

### 线路选择

BGP

### 加密协议

**Shadowsocks**：继VPN之后的一切代理服务器中转这种翻墙方式的始祖，简单粗暴，拥有最快的RTT（通讯延迟），但存在一定安全风险，是目前主流的翻墙方式。没有任何证据表明其能被GFW精准识别。

**ShadowsocksR**：Shadowsocks的优化版，但并非同一作者，存在较大争议。

**V2Ray**：极具弹性的平台，支持的协议和算法多、功能多，综合来看安全性更高，但部署使用更加复杂，加解密性能占用更高。其中的Vmess+websocket+TLS方案，是目前来说最稳定的方式之一。

**trojan**：原理同样是websocket+TLS，和V2Ray不完全等同。它解决了V2Ray复杂部署难度大的问题，通信协议只使用websocket+TLS；剥离了Vmess，只使用TLS，执行效率和加解密的性能占用及延时都有了改善。缺点是该方式较新，兼容和支持较差，且不支持反代理。

---

[^1]: QoS: Quality of Service，服务质量，能够识别网络中流量的需求，动态地根据服务内容进行调节。可以让需要延迟低的需求优先通行，如带宽要求低延时需求高的游戏或带宽要求高延时需求低的流媒体数据。也存在“被QoS”，被QoS服务针对流量优先级进行了限速。