export default defineNuxtRouteMiddleware(async (to, from) => {
  const ipRangesNiger = [
    { start: "102.213.244.0", end: "102.213.247.255" },
    { start: "102.213.60.0", end: "102.213.63.255" },
    { start: "102.214.4.0", end: "102.214.7.255" },
    { start: "102.215.84.0", end: "102.215.87.255" },
    { start: "102.217.96.0", end: "102.217.99.255" },
    { start: "102.220.24.0", end: "102.220.27.255" },
    { start: "154.127.80.0", end: "154.127.95.255" },
    { start: "154.66.220.0", end: "154.66.223.255" },
    { start: "197.214.0.0", end: "197.214.63.255" },
    { start: "209.28.214.0", end: "209.28.215.255" },
    { start: "41.138.32.0", end: "41.138.63.255" },
    { start: "41.203.128.0", end: "41.203.159.255" },
    { start: "41.221.217.0", end: "41.221.217.255" },
    { start: "41.78.116.0", end: "41.78.119.255" },
    { start: "57.82.150.0", end: "57.82.151.255" },
  ];

  const ipRangesNigeria = [
    { start: "102.128.192.0", end: "102.128.255.255" },
    { start: "102.129.144.0", end: "102.129.144.255" },
    { start: "102.130.0.0", end: "102.130.7.255" },
    { start: "102.130.103.0", end: "102.130.103.255" },
    { start: "102.130.48.0", end: "102.130.48.255" },
    { start: "102.130.52.0", end: "102.130.55.255" },
    { start: "102.131.36.0", end: "102.131.39.255" },
    { start: "102.131.64.0", end: "102.131.255.255" },
    { start: "102.132.102.0", end: "102.132.103.255" },
    { start: "102.134.112.0", end: "102.134.115.255" },
    { start: "102.134.16.0", end: "102.134.21.255" },
    { start: "102.135.192.0", end: "102.135.223.255" },
    { start: "102.135.32.0", end: "102.135.47.255" },
    { start: "102.140.32.0", end: "102.140.47.255" },
    { start: "102.140.96.0", end: "102.140.103.255" },
    { start: "102.141.212.0", end: "102.141.215.255" },
    { start: "102.141.233.0", end: "102.141.234.255" },
    { start: "102.164.32.0", end: "102.164.39.255" },
    { start: "102.164.44.0", end: "102.164.47.255" },
    { start: "102.165.124.0", end: "102.165.127.255" },
    { start: "102.165.184.0", end: "102.165.187.255" },
    { start: "102.165.2.0", end: "102.165.2.255" },
    { start: "102.165.23.0", end: "102.165.23.255" },
    { start: "102.165.61.0", end: "102.165.61.255" },
    { start: "102.176.184.0", end: "102.176.184.255" },
    { start: "102.176.240.0", end: "102.176.247.255" },
    { start: "102.208.223.0", end: "102.208.223.255" },
    { start: "102.209.190.0", end: "102.209.190.255" },
    { start: "102.209.28.0", end: "102.209.31.255" },
    { start: "102.209.44.0", end: "102.209.47.255" },
    { start: "102.210.168.0", end: "102.210.168.255" },
    { start: "102.210.192.0", end: "102.210.192.255" },
    { start: "102.210.194.0", end: "102.210.195.255" },
    { start: "102.210.216.0", end: "102.210.219.255" },
    { start: "102.210.240.0", end: "102.210.241.255" },
    { start: "102.210.60.0", end: "102.210.63.255" },
    { start: "102.211.122.0", end: "102.211.122.255" },
    { start: "102.211.154.0", end: "102.211.155.255" },
    { start: "102.211.163.0", end: "102.211.167.255" },
    { start: "102.211.228.0", end: "102.211.229.255" },
    { start: "102.211.40.0", end: "102.211.43.255" },
    { start: "102.211.80.0", end: "102.211.83.255" },
    { start: "102.211.96.0", end: "102.211.99.255" },
    { start: "102.212.100.0", end: "102.212.107.255" },
    { start: "102.212.163.0", end: "102.212.163.255" },
    { start: "102.212.174.0", end: "102.212.174.255" },
    { start: "102.212.204.0", end: "102.212.204.255" },
    { start: "102.212.206.0", end: "102.212.211.255" },
    { start: "102.212.229.0", end: "102.212.229.255" },
    { start: "102.212.232.0", end: "102.212.235.255" },
    { start: "102.212.240.0", end: "102.212.243.255" },
    { start: "102.212.252.0", end: "102.212.255.255" },
    { start: "102.212.40.0", end: "102.212.43.255" },
    { start: "102.212.80.0", end: "102.212.80.255" },
    { start: "102.213.18.0", end: "102.213.19.255" },
    { start: "102.213.243.0", end: "102.213.243.255" },
    { start: "102.213.76.0", end: "102.213.79.255" },
    { start: "102.213.84.0", end: "102.213.91.255" },
    { start: "102.214.124.0", end: "102.214.125.255" },
    { start: "102.214.14.0", end: "102.214.14.255" },
    { start: "102.214.240.0", end: "102.214.243.255" },
    { start: "102.214.248.0", end: "102.214.251.255" },
    { start: "102.214.56.0", end: "102.214.59.255" },
    { start: "102.214.91.0", end: "102.214.91.255" },
    { start: "102.215.176.0", end: "102.215.179.255" },
    { start: "102.215.204.0", end: "102.215.207.255" },
    { start: "102.215.222.0", end: "102.215.223.255" },
    { start: "102.215.56.0", end: "102.215.57.255" },
    { start: "102.216.128.0", end: "102.216.129.255" },
    { start: "102.216.134.0", end: "102.216.135.255" },
    { start: "102.216.152.0", end: "102.216.153.255" },
    { start: "102.216.180.0", end: "102.216.183.255" },
    { start: "102.216.192.0", end: "102.216.195.255" },
    { start: "102.216.200.0", end: "102.216.203.255" },
    { start: "102.216.21.0", end: "102.216.21.255" },
    { start: "102.216.236.0", end: "102.216.237.255" },
    { start: "102.216.32.0", end: "102.216.35.255" },
    { start: "102.216.8.0", end: "102.216.11.255" },
    { start: "102.216.96.0", end: "102.216.99.255" },
    { start: "102.217.0.0", end: "102.217.3.255" },
    { start: "102.217.180.0", end: "102.217.183.255" },
    { start: "102.217.204.0", end: "102.217.208.255" },
    { start: "102.217.212.0", end: "102.217.215.255" },
    { start: "102.217.255.0", end: "102.217.255.255" },
    { start: "102.217.8.0", end: "102.217.11.255" },
    { start: "102.218.100.0", end: "102.218.102.255" },
    { start: "102.218.116.0", end: "102.218.119.255" },
    { start: "102.218.200.0", end: "102.218.203.255" },
    { start: "102.218.76.0", end: "102.218.83.255" },
    { start: "102.219.128.0", end: "102.219.128.255" },
    { start: "102.219.152.0", end: "102.219.155.255" },
    { start: "102.219.188.0", end: "102.219.189.255" },
    { start: "102.219.194.0", end: "102.219.195.255" },
    { start: "102.219.220.0", end: "102.219.223.255" },
    { start: "102.219.52.0", end: "102.219.55.255" },
    { start: "102.219.82.0", end: "102.219.82.255" },
    { start: "102.219.96.0", end: "102.219.99.255" },
    { start: "102.22.216.0", end: "102.22.223.255" },
    { start: "102.220.130.0", end: "102.220.131.255" },
    { start: "102.220.160.0", end: "102.220.163.255" },
    { start: "102.220.172.0", end: "102.220.172.255" },
    { start: "102.220.188.0", end: "102.220.191.255" },
    { start: "102.220.204.0", end: "102.220.207.255" },
    { start: "102.220.220.0", end: "102.220.220.255" },
    { start: "102.220.44.0", end: "102.220.47.255" },
    { start: "102.220.96.0", end: "102.220.99.255" },
    { start: "102.221.114.0", end: "102.221.115.255" },
    { start: "102.221.136.0", end: "102.221.139.255" },
    { start: "102.221.16.0", end: "102.221.19.255" },
    { start: "102.221.160.0", end: "102.221.167.255" },
    { start: "102.221.184.0", end: "102.221.187.255" },
    { start: "102.221.190.0", end: "102.221.190.255" },
    { start: "102.221.236.0", end: "102.221.239.255" },
    { start: "102.221.4.0", end: "102.221.4.255" },
    { start: "102.221.44.0", end: "102.221.47.255" },
    { start: "102.221.75.0", end: "102.221.75.255" },
    { start: "102.221.84.0", end: "102.221.91.255" },
    { start: "102.222.116.0", end: "102.222.119.255" },
    { start: "102.222.72.0", end: "102.222.72.255" },
    { start: "102.222.96.0", end: "102.222.99.255" },
    { start: "102.223.101.0", end: "102.223.101.255" },
    { start: "102.223.255.0", end: "102.223.255.255" },
    { start: "102.223.36.0", end: "102.223.39.255" },
    { start: "102.223.52.0", end: "102.223.55.255" },
    { start: "102.223.78.0", end: "102.223.78.255" },
    { start: "102.23.164.0", end: "102.23.167.255" },
    { start: "102.23.96.0", end: "102.23.99.255" },
    { start: "102.36.132.0", end: "102.36.135.255" },
    { start: "102.36.148.0", end: "102.36.151.255" },
    { start: "102.36.160.0", end: "102.36.160.255" },
    { start: "102.36.162.0", end: "102.36.163.255" },
    { start: "102.36.176.0", end: "102.36.179.255" },
    { start: "102.36.228.0", end: "102.36.231.255" },
    { start: "102.38.192.0", end: "102.38.198.255" },
    { start: "102.38.200.0", end: "102.38.203.255" },
    { start: "102.38.205.0", end: "102.38.223.255" },
    { start: "102.38.226.0", end: "102.38.228.255" },
    { start: "102.38.231.0", end: "102.38.231.255" },
    { start: "102.38.56.0", end: "102.38.59.255" },
    { start: "102.64.108.0", end: "102.64.108.255" },
    { start: "102.64.48.0", end: "102.64.55.255" },
    { start: "102.64.6.0", end: "102.64.7.255" },
    { start: "102.67.0.0", end: "102.67.47.255" },
    { start: "102.67.168.0", end: "102.67.171.255" },
    { start: "102.68.104.0", end: "102.68.111.255" },
    { start: "102.68.126.0", end: "102.68.126.255" },
    { start: "102.68.168.0", end: "102.68.171.255" },
    { start: "102.68.70.0", end: "102.68.70.255" },
    { start: "102.68.84.0", end: "102.68.85.255" },
    { start: "102.68.98.0", end: "102.68.98.255" },
    { start: "102.69.144.0", end: "102.69.147.255" },
    { start: "102.69.240.0", end: "102.69.243.255" },
    { start: "102.88.0.0", end: "102.88.0.255" },
    { start: "102.88.2.0", end: "102.95.255.255" },
    { start: "103.97.91.0", end: "103.97.91.255" },
    { start: "104.133.44.0", end: "104.133.44.255" },
    { start: "104.166.144.0", end: "104.166.147.255" },
    { start: "104.28.60.0", end: "104.28.60.255" },
    { start: "105.112.0.0", end: "105.112.190.255" },
    { start: "105.112.192.0", end: "105.127.255.255" },
    { start: "105.235.192.0", end: "105.235.207.255" },
    { start: "108.171.36.0", end: "108.171.36.255" },
    { start: "109.238.193.0", end: "109.238.193.255" },
    { start: "128.77.14.0", end: "128.77.14.255" },
    { start: "129.18.0.0", end: "129.18.255.255" },
    { start: "129.205.96.0", end: "129.205.127.255" },
    { start: "129.222.204.0", end: "129.222.207.255" },
    { start: "129.56.0.0", end: "129.56.255.255" },
    { start: "134.238.97.0", end: "134.238.98.255" },
    { start: "14.137.172.0", end: "14.137.175.255" },
    { start: "146.23.42.0", end: "146.23.43.255" },
    { start: "146.70.65.0", end: "146.70.65.255" },
    { start: "150.107.126.0", end: "150.107.126.255" },
    { start: "152.32.140.0", end: "152.32.143.255" },
    { start: "154.113.0.0", end: "154.113.255.255" },
    { start: "154.117.64.0", end: "154.117.127.255" },
    { start: "154.118.0.0", end: "154.118.127.255" },
    { start: "154.120.64.0", end: "154.120.127.255" },
    { start: "154.65.4.0", end: "154.65.7.255" },
    { start: "154.66.0.0", end: "154.66.63.255" },
    { start: "154.68.192.0", end: "154.68.255.255" },
    { start: "154.72.32.0", end: "154.72.39.255" },
    { start: "154.73.8.0", end: "154.73.11.255" },
    { start: "154.81.8.0", end: "154.81.8.255" },
    { start: "155.93.0.0", end: "155.93.127.255" },
    { start: "156.0.248.0", end: "156.0.251.255" },
    { start: "156.0.255.0", end: "156.0.255.255" },
    { start: "156.238.26.0", end: "156.238.26.255" },
    { start: "157.167.108.0", end: "157.167.108.255" },
    { start: "158.255.76.0", end: "158.255.76.255" },
    { start: "160.119.124.0", end: "160.119.127.255" },
    { start: "160.119.196.0", end: "160.119.197.255" },
    { start: "160.119.246.0", end: "160.119.247.255" },
    { start: "160.152.0.0", end: "160.152.255.255" },
    { start: "160.226.0.0", end: "160.226.127.255" },
    { start: "162.10.247.0", end: "162.10.247.255" },
    { start: "163.116.190.0", end: "163.116.190.255" },
    { start: "164.160.192.0", end: "164.160.199.255" },
    { start: "165.154.10.0", end: "165.154.11.255" },
    { start: "165.154.176.0", end: "165.154.177.255" },
    { start: "165.154.234.0", end: "165.154.234.255" },
    { start: "165.154.249.0", end: "165.154.249.255" },
    { start: "165.233.246.0", end: "165.233.246.255" },
    { start: "165.73.192.0", end: "165.73.223.255" },
    { start: "165.90.240.0", end: "165.90.255.255" },
    { start: "167.167.194.0", end: "167.167.194.255" },
    { start: "168.253.112.0", end: "168.253.119.255" },
    { start: "168.253.208.0", end: "168.253.215.255" },
    { start: "169.159.64.0", end: "169.159.127.255" },
    { start: "169.239.16.0", end: "169.239.19.255" },
    { start: "169.239.188.0", end: "169.239.195.255" },
    { start: "169.239.232.0", end: "169.239.239.255" },
    { start: "169.239.48.0", end: "169.239.51.255" },
    { start: "169.255.124.0", end: "169.255.127.255" },
    { start: "169.255.180.0", end: "169.255.183.255" },
    { start: "169.255.208.0", end: "169.255.211.255" },
    { start: "169.255.236.0", end: "169.255.239.255" },
    { start: "169.255.40.0", end: "169.255.43.255" },
    { start: "169.255.57.0", end: "169.255.57.255" },
    { start: "172.111.128.0", end: "172.111.128.255" },
    { start: "172.111.132.0", end: "172.111.132.255" },
    { start: "172.69.12.0", end: "172.69.12.255" },
    { start: "172.69.253.0", end: "172.69.253.255" },
    { start: "172.96.127.0", end: "172.96.127.255" },
    { start: "176.97.192.0", end: "176.97.192.255" },
    { start: "185.147.53.0", end: "185.147.53.255" },
    { start: "185.174.62.0", end: "185.174.62.255" },
    { start: "185.255.123.0", end: "185.255.123.255" },
    { start: "188.215.31.0", end: "188.215.31.255" },
    { start: "192.145.184.0", end: "192.145.185.255" },
    { start: "193.189.0.0", end: "193.189.63.255" },
    { start: "193.238.28.0", end: "193.238.31.255" },
    { start: "193.35.224.0", end: "193.35.224.255" },
    { start: "193.37.42.0", end: "193.37.42.255" },
    { start: "193.42.119.0", end: "193.42.119.255" },
    { start: "196.1.133.0", end: "196.1.133.255" },
    { start: "196.1.176.0", end: "196.1.191.255" },
    { start: "196.10.231.0", end: "196.10.231.255" },
    { start: "196.11.104.0", end: "196.11.104.255" },
    { start: "196.11.150.0", end: "196.11.150.255" },
    { start: "193.37.42.0", end: "193.37.42.255" },
    { start: "193.42.119.0", end: "193.42.119.255" },
    { start: "196.1.133.0", end: "196.1.133.255" },
    { start: "196.1.176.0", end: "196.1.191.255" },
    { start: "196.10.231.0", end: "196.10.231.255" },
    { start: "196.11.104.0", end: "196.11.104.255" },
    { start: "196.11.150.0", end: "196.11.150.255" },
    { start: "196.11.184.0", end: "196.11.187.255" },
    { start: "196.11.231.0", end: "196.11.231.255" },
    { start: "196.13.0.0", end: "196.13.0.255" },
    { start: "196.13.103.0", end: "196.13.103.255" },
    { start: "196.13.111.0", end: "196.13.112.255" },
    { start: "196.13.161.0", end: "196.13.161.255" },
    { start: "196.13.242.0", end: "196.13.242.255" },
    { start: "196.13.245.0", end: "196.13.245.255" },
    { start: "196.200.112.0", end: "196.200.115.255" },
    { start: "196.200.117.0", end: "196.200.126.255" },
    { start: "196.200.64.0", end: "196.200.79.255" },
    { start: "196.201.157.0", end: "196.201.157.255" },
    { start: "196.207.0.0", end: "196.207.15.255" },
    { start: "196.216.144.0", end: "196.216.151.255" },
    { start: "196.216.200.0", end: "196.216.203.255" },
    { start: "196.216.208.0", end: "196.216.211.255" },
    { start: "196.216.251.0", end: "196.216.251.255" },
    { start: "196.216.253.0", end: "196.216.253.255" },
    { start: "196.216.255.0", end: "196.216.255.255" },
    { start: "196.216.4.0", end: "196.216.7.255" },
    { start: "196.22.6.0", end: "196.22.6.255" },
    { start: "196.220.0.0", end: "196.220.31.255" },
    { start: "196.220.128.0", end: "196.220.159.255" },
    { start: "196.220.192.0", end: "196.220.207.255" },
    { start: "196.220.224.0", end: "196.220.255.255" },
    { start: "196.220.64.0", end: "196.220.95.255" },
    { start: "196.222.0.0", end: "196.222.255.255" },
    { start: "196.223.112.0", end: "196.223.127.255" },
    { start: "196.251.224.0", end: "196.251.231.255" },
    { start: "196.251.79.0", end: "196.251.87.255" },
    { start: "196.27.128.0", end: "196.27.255.255" },
    { start: "196.28.10.0", end: "196.28.10.255" },
    { start: "196.29.44.0", end: "196.29.47.255" },
    { start: "196.3.60.0", end: "196.3.63.255" },
    { start: "196.32.224.0", end: "196.32.225.255" },
    { start: "196.40.160.0", end: "196.40.175.255" },
    { start: "196.40.192.0", end: "196.40.255.255" },
    { start: "196.41.80.0", end: "196.41.80.255" },
    { start: "196.41.84.0", end: "196.41.84.255" },
    { start: "196.41.94.0", end: "196.41.94.255" },
    { start: "196.43.215.0", end: "196.43.215.255" },
    { start: "196.43.232.0", end: "196.43.232.255" },
    { start: "196.43.235.0", end: "196.43.235.255" },
    { start: "196.43.244.0", end: "196.43.244.255" },
    { start: "196.43.251.0", end: "196.43.251.255" },
    { start: "196.45.48.0", end: "196.45.63.255" },
    { start: "196.46.144.0", end: "196.46.147.255" },
    { start: "196.46.20.0", end: "196.46.20.255" },
    { start: "196.46.240.0", end: "196.46.247.255" },
    { start: "196.46.27.0", end: "196.46.27.255" },
    { start: "196.47.96.0", end: "196.47.127.255" },
    { start: "196.49.26.0", end: "196.49.26.255" },
    { start: "196.49.28.0", end: "196.49.28.255" },
    { start: "196.49.30.0", end: "196.49.30.255" },
    { start: "196.49.32.0", end: "196.49.32.255" },
    { start: "196.49.62.0", end: "196.49.62.255" },
    { start: "196.49.90.0", end: "196.49.90.255" },
    { start: "196.50.4.0", end: "196.50.7.255" },
    { start: "196.6.103.0", end: "196.6.103.255" },
    { start: "196.6.188.0", end: "196.6.191.255" },
    { start: "196.6.216.0", end: "196.6.217.255" },
    { start: "196.6.228.0", end: "196.6.228.255" },
    { start: "196.60.104.0", end: "196.60.104.255" },
    { start: "196.60.58.0", end: "196.60.58.255" },
    { start: "196.61.216.0", end: "196.61.223.255" },
    { start: "197.148.80.0", end: "197.148.87.255" },
    { start: "197.149.188.0", end: "197.149.191.255" },
    { start: "197.149.64.0", end: "197.149.127.255" },
    { start: "197.156.192.0", end: "197.156.255.255" },
    { start: "197.157.216.0", end: "197.157.219.255" },
    { start: "197.159.64.0", end: "197.159.79.255" },
    { start: "197.210.0.0", end: "197.210.255.255" },
    { start: "197.211.32.0", end: "197.211.33.255" },
    { start: "197.211.35.0", end: "197.211.41.255" },
    { start: "197.211.43.0", end: "197.211.43.255" },
    { start: "197.211.45.0", end: "197.211.51.255" },
    { start: "197.211.53.0", end: "197.211.63.255" },
    { start: "197.214.104.0", end: "197.214.111.255" },
    { start: "197.214.96.0", end: "197.214.102.255" },
    { start: "197.220.187.0", end: "197.220.189.255" },
    { start: "197.234.32.0", end: "197.234.63.255" },
    { start: "197.242.240.0", end: "197.242.255.255" },
    { start: "197.242.96.0", end: "197.242.127.255" },
    { start: "197.253.0.0", end: "197.253.63.255" },
    { start: "197.255.0.0", end: "197.255.63.255" },
    { start: "197.255.160.0", end: "197.255.175.255" },
    { start: "197.255.208.0", end: "197.255.223.255" },
    { start: "197.255.244.0", end: "197.255.247.255" },
    { start: "197.255.252.0", end: "197.255.255.255" },
    { start: "204.8.206.0", end: "204.8.207.255" },
    { start: "208.122.254.0", end: "208.122.254.255" },
    { start: "208.127.177.0", end: "208.127.177.255" },
    { start: "212.100.64.0", end: "212.100.95.255" },
    { start: "212.165.168.0", end: "212.165.168.255" },
    { start: "212.165.170.0", end: "212.165.170.255" },
    { start: "212.23.200.0", end: "212.23.200.255" },
    { start: "213.109.151.0", end: "213.109.151.255" },
    { start: "213.187.142.0", end: "213.187.142.255" },
    { start: "213.255.128.0", end: "213.255.159.255" },
    { start: "216.139.181.0", end: "216.139.181.255" },
    { start: "216.226.218.0", end: "216.226.219.255" },
    { start: "217.117.0.0", end: "217.117.15.255" },
    { start: "217.14.80.0", end: "217.14.83.255" },
    { start: "217.14.85.0", end: "217.14.95.255" },
    { start: "23.208.31.0", end: "23.208.31.255" },
    { start: "23.248.172.0", end: "23.248.172.255" },
    { start: "23.248.181.0", end: "23.248.181.255" },
    { start: "23.248.185.0", end: "23.248.185.255" },
    { start: "24.206.113.0", end: "24.206.113.255" },
    { start: "24.206.125.0", end: "24.206.125.255" },
    { start: "34.103.146.0", end: "34.103.147.255" },
    { start: "34.103.219.0", end: "34.103.219.255" },
    { start: "34.99.130.0", end: "34.99.131.255" },
    { start: "34.99.202.0", end: "34.99.203.255" },
    { start: "41.138.160.0", end: "41.138.191.255" },
    { start: "41.173.240.0", end: "41.173.243.255" },
    { start: "41.184.0.0", end: "41.184.255.255" },
    { start: "41.189.0.0", end: "41.189.31.255" },
    { start: "41.190.0.0", end: "41.190.31.255" },
    { start: "41.194.18.0", end: "41.194.18.255" },
    { start: "41.194.52.0", end: "41.194.55.255" },
    { start: "41.203.64.0", end: "41.203.78.255" },
    { start: "41.203.80.0", end: "41.203.93.255" },
    { start: "41.203.95.0", end: "41.203.127.255" },
    { start: "41.206.0.0", end: "41.206.31.255" },
    { start: "41.207.248.0", end: "41.207.251.255" },
    { start: "41.215.244.0", end: "41.215.247.255" },
    { start: "41.216.160.0", end: "41.216.175.255" },
    { start: "41.216.216.0", end: "41.216.223.255" },
    { start: "41.217.0.0", end: "41.217.127.255" },
    { start: "41.217.204.0", end: "41.217.207.255" },
    { start: "41.219.128.0", end: "41.219.191.255" },
    { start: "41.220.64.0", end: "41.220.95.255" },
    { start: "41.221.160.0", end: "41.221.175.255" },
    { start: "41.222.144.0", end: "41.222.151.255" },
    { start: "41.222.208.0", end: "41.222.211.255" },
    { start: "41.222.40.0", end: "41.222.47.255" },
    { start: "41.222.64.0", end: "41.222.71.255" },
    { start: "41.222.76.0", end: "41.222.79.255" },
    { start: "41.223.128.0", end: "41.223.131.255" },
    { start: "41.223.136.0", end: "41.223.139.255" },
    { start: "41.223.144.0", end: "41.223.147.255" },
    { start: "41.223.44.0", end: "41.223.47.255" },
    { start: "41.223.64.0", end: "41.223.67.255" },
    { start: "41.242.48.0", end: "41.242.63.255" },
    { start: "41.57.120.0", end: "41.57.123.255" },
    { start: "41.58.0.0", end: "41.58.255.255" },
    { start: "41.63.68.0", end: "41.63.71.255" },
    { start: "41.67.128.0", end: "41.67.191.255" },
    { start: "41.73.0.0", end: "41.73.15.255" },
    { start: "41.73.128.0", end: "41.73.157.255" },
    { start: "41.73.224.0", end: "41.73.255.255" },
    { start: "41.75.192.0", end: "41.75.207.255" },
    { start: "41.75.80.0", end: "41.75.95.255" },
    { start: "41.76.152.0", end: "41.76.159.255" },
    { start: "41.76.192.0", end: "41.76.199.255" },
    { start: "41.76.248.0", end: "41.76.255.255" },
    { start: "41.76.64.0", end: "41.76.87.255" },
    { start: "41.77.168.0", end: "41.77.175.255" },
    { start: "41.77.40.0", end: "41.77.47.255" },
    { start: "41.78.100.0", end: "41.78.103.255" },
    { start: "41.78.156.0", end: "41.78.159.255" },
    { start: "41.78.172.0", end: "41.78.175.255" },
    { start: "41.78.208.0", end: "41.78.211.255" },
    { start: "41.78.224.0", end: "41.78.227.255" },
    { start: "41.78.252.0", end: "41.78.255.255" },
    { start: "41.78.8.0", end: "41.78.11.255" },
    { start: "41.78.80.0", end: "41.78.83.255" },
    { start: "41.78.88.0", end: "41.78.91.255" },
    { start: "41.79.116.0", end: "41.79.119.255" },
    { start: "41.79.152.0", end: "41.79.155.255" },
    { start: "41.79.204.0", end: "41.79.207.255" },
    { start: "41.79.4.0", end: "41.79.7.255" },
    { start: "41.79.64.0", end: "41.79.67.255" },
    { start: "41.84.151.0", end: "41.84.151.255" },
    { start: "41.86.128.0", end: "41.86.159.255" },
    { start: "41.87.64.0", end: "41.87.95.255" },
    { start: "45.195.5.0", end: "45.195.5.255" },
    { start: "45.221.65.0", end: "45.221.67.255" },
    { start: "45.222.96.0", end: "45.222.103.255" },
    { start: "57.82.128.0", end: "57.82.135.255" },
    { start: "57.84.96.0", end: "57.84.111.255" },
    { start: "57.98.104.0", end: "57.98.107.255" },
    { start: "62.173.32.0", end: "62.173.34.255" },
    { start: "62.173.36.0", end: "62.173.63.255" },
    { start: "62.56.155.0", end: "62.56.155.255" },
    { start: "63.103.138.0", end: "63.103.138.255" },
    { start: "63.103.140.0", end: "63.103.143.255" },
    { start: "63.109.248.0", end: "63.109.248.255" },
    { start: "63.243.167.0", end: "63.243.167.255" },
    { start: "66.178.33.0", end: "66.178.33.255" },
    { start: "66.178.81.0", end: "66.178.81.255" },
    { start: "70.35.144.0", end: "70.35.144.255" },
    { start: "77.73.189.0", end: "77.73.189.255" },
    { start: "8.35.57.0", end: "8.35.57.255" },
    { start: "80.15.229.0", end: "80.15.229.255" },
    { start: "80.247.141.0", end: "80.247.141.255" },
    { start: "80.247.151.0", end: "80.247.151.255" },
    { start: "80.247.157.0", end: "80.247.157.255" },
    { start: "80.247.159.0", end: "80.247.159.255" },
    { start: "80.248.0.0", end: "80.248.15.255" },
    { start: "80.88.10.0", end: "80.88.10.255" },
    { start: "80.88.7.0", end: "80.88.8.255" },
    { start: "81.199.0.0", end: "81.199.0.255" },
    { start: "81.199.210.0", end: "81.199.210.255" },
    { start: "81.199.5.0", end: "81.199.7.255" },
    { start: "81.199.9.0", end: "81.199.9.255" },
    { start: "82.101.128.0", end: "82.101.191.255" },
    { start: "82.197.79.0", end: "82.197.79.255" },
    { start: "82.206.157.0", end: "82.206.157.255" },
    { start: "83.143.8.0", end: "83.143.15.255" },
    { start: "83.229.108.0", end: "83.229.108.255" },
    { start: "84.254.172.0", end: "84.254.172.255" },
    { start: "85.208.151.0", end: "85.208.151.255" },
    { start: "87.249.74.0", end: "87.249.75.255" },
    { start: "87.249.78.0", end: "87.249.78.255" },
    { start: "88.202.61.0", end: "88.202.61.255" },
    { start: "88.202.99.0", end: "88.202.99.255" },
    { start: "89.254.62.0", end: "89.254.63.255" },
    { start: "91.240.228.0", end: "91.240.228.255" },
    { start: "94.72.180.0", end: "94.72.180.255" },
    { start: "95.210.149.0", end: "95.210.149.255" },
    { start: "95.210.54.0", end: "95.210.55.255" },
    { start: "96.0.36.0", end: "96.0.47.255" },
    { start: "98.97.78.0", end: "98.97.79.255" },
    { start: "98.98.183.0", end: "98.98.183.255" },
    { start: "98.98.196.0", end: "98.98.197.255" },
  ];

  function ipToInt(ip: string) {
    return (
      ip
        .split(".")
        .reduce((int, octet) => (int << 8) + parseInt(octet, 10), 0) >>> 0
    );
  }

  function isIpInRange(ip: string, range: { start: string; end: string }) {
    const ipInt = ipToInt(ip);
    const startInt = ipToInt(range.start);
    const endInt = ipToInt(range.end);
    return ipInt >= startInt && ipInt <= endInt;
  }

  function checkIpCountry(ip: string) {
    for (const range of ipRangesNiger) {
      if (isIpInRange(ip, range)) return "Niger";
    }

    for (const range of ipRangesNigeria) {
      if (isIpInRange(ip, range)) return "Nigeria";
    }

    return "Unknown";
  }

  const response = await fetch("https://api.ipify.org?format=json");
  let { ip } = await response.json();
  const country = checkIpCountry(ip);
  if (country === "Niger" || country === "Nigeria") {
    return abortNavigation();
  }
});