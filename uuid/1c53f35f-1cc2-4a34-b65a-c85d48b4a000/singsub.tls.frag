{
  "log": {
    "disabled": false,
    "level": "fatal",
    "timestamp": true
  },
  "experimental": {
    "clash_api": {
      "external_controller": "0.0.0.0:9090",
      "external_ui": "../files/yacd",
      "external_ui_download_url": "https://github.com/MetaCubeX/Yacd-meta/archive/gh-pages.zip",
      "secret": "",
      "default_mode": "rule"
    },
    "cache_file": {
      "enabled": true
    }
  },
  "dns": {
    "servers": [
      {
        "type": "local",
        "tag": "dns-local"
      },
      {
        "type": "udp",
        "server": "8.8.8.8",
        "tag": "dns-plain"
      },
      {
        "type": "tls",
        "server": "8.8.8.8",
        "tag": "dns-remote",
        "detour": "proxy",
        "tls": {
          "enabled": true
        }
      },
      {
        "type": "https",
        "server": "dns.cloudflare.com",
        "domain_resolver": "hosts",
        "tag": "dns-frag",
        "tls": {
          "enabled": true,
          "record_fragment": true,
          "utls": {
            "enabled": true,
            "fingerprint": "chrome"
          }
        }
      },
      {
        "type": "https",
        "server": "dns.digitalsize.net",
        "domain_resolver": "dns-plain",
        "tag": "dns-direct",
        "tls": {
          "enabled": true
        }
      },
      {
        "type": "https",
        "server": "free.shecan.ir",
        "domain_resolver": "dns-plain",
        "tag": "dns-shecan",
        "tls": {
          "enabled": true
        }
      },
      {
        "type": "hosts",
        "tag": "hosts",
        "predefined": {
          "dns.cloudflare.com": [
            "104.16.219.230",
            "104.16.250.250",
            "104.17.147.22",
            "104.17.42.10",
            "104.17.88.212",
            "104.18.10.128",
            "104.19.250.20",
            "104.20.9.79",
            "104.21.63.78",
            "104.26.15.85",
            "162.159.130.234",
            "162.159.133.234",
            "172.67.135.149",
            "172.67.170.72",
            "172.67.73.174",
            "188.114.98.0"
          ]
        }
      },
      {
        "type": "fakeip",
        "tag": "fakeip",
        "inet4_range": "198.18.0.0/15",
        "inet6_range": "fc00::/18"
      }
    ],
    "rules": [
      {
        "ip_accept_any": true,
        "server": "hosts"
      },
      {
        "domain": [
          "tgju.org",
          "www.speedtest.net",
          "b2n.ir"
        ],
        "server": "dns-local"
      },
      {
        "domain_suffix": [
          ".ir"
        ],
        "server": "dns-local"
      },
      {
        "clash_mode": "direct",
        "server": "dns-plain"
      },
      {
        "clash_mode": "tahrim",
        "server": "dns-shecan"
      },
      {
        "inbound": [
          "tun-in"
        ],
        "query_type": [
          "A",
          "AAAA"
        ],
        "server": "fakeip",
        "disable_cache": true
      }
    ],
    "final": "dns-remote",
    "strategy": "ipv4_only",
    "independent_cache": true
  },
  "inbounds": [
    {
      "type": "direct",
      "tag": "dns-in",
      "listen": "0.0.0.0",
      "listen_port": 6450
    },
    {
      "type": "tun",
      "tag": "tun-in",
      "interface_name": "tun0",
      "address": [
        "172.19.0.1/28",
        "fdfe:dcba:9876::1/126"
      ],
      "mtu": 9000,
      "auto_route": true,
      "strict_route": true,
      "stack": "mixed",
      "endpoint_independent_nat": true
    },
    {
      "type": "mixed",
      "tag": "mixed-in",
      "listen": "0.0.0.0",
      "listen_port": 2080
    }
  ],
  "outbounds": [
    {
      "tag": "proxy",
      "type": "selector",
      "outbounds": [
        "URL-TEST",
        "1.TLS.dry-star-6299.kexaxik407.workers.dev",
        "2.TLS.dry-star-6299.kexaxik407.workers.dev",
        "3.TLS.dry-star-6299.kexaxik407.workers.dev",
        "4.TLS.dry-star-6299.kexaxik407.workers.dev",
        "5.TLS.dry-star-6299.kexaxik407.workers.dev",
        "6.TLS.dry-star-6299.kexaxik407.workers.dev",
        "7.TLS.dry-star-6299.kexaxik407.workers.dev",
        "8.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "9.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "10.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "11.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "12.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "13.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "14.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "15.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "16.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "17.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "18.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "19.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "20.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "21.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "22.TLS.weathered-night-d51a.simax49258.workers.dev",
        "23.TLS.weathered-night-d51a.simax49258.workers.dev",
        "24.TLS.weathered-night-d51a.simax49258.workers.dev",
        "25.TLS.weathered-night-d51a.simax49258.workers.dev",
        "26.TLS.weathered-night-d51a.simax49258.workers.dev",
        "27.TLS.weathered-night-d51a.simax49258.workers.dev",
        "28.TLS.weathered-night-d51a.simax49258.workers.dev",
        "29.TLS.worker1.peramip455.workers.dev",
        "30.TLS.worker1.peramip455.workers.dev",
        "31.TLS.worker1.peramip455.workers.dev",
        "32.TLS.worker1.peramip455.workers.dev",
        "33.TLS.worker1.peramip455.workers.dev",
        "34.TLS.worker1.peramip455.workers.dev",
        "35.TLS.worker1.peramip455.workers.dev",
        "36.TLS.worker1.soketoj930.workers.dev",
        "37.TLS.worker1.soketoj930.workers.dev",
        "38.TLS.worker1.soketoj930.workers.dev",
        "39.TLS.worker1.soketoj930.workers.dev",
        "40.TLS.worker1.soketoj930.workers.dev",
        "41.TLS.worker1.soketoj930.workers.dev",
        "42.TLS.worker1.soketoj930.workers.dev",
        "43.TLS.worker1.wewotes286.workers.dev",
        "44.TLS.worker1.wewotes286.workers.dev",
        "45.TLS.worker1.wewotes286.workers.dev",
        "46.TLS.worker1.wewotes286.workers.dev",
        "47.TLS.worker1.wewotes286.workers.dev",
        "48.TLS.worker1.wewotes286.workers.dev",
        "49.TLS.worker1.wewotes286.workers.dev",
        "50.TLS.worker1.doviso5171.workers.dev",
        "51.TLS.worker1.doviso5171.workers.dev",
        "52.TLS.worker1.doviso5171.workers.dev",
        "53.TLS.worker1.doviso5171.workers.dev",
        "54.TLS.worker1.doviso5171.workers.dev",
        "55.TLS.worker1.doviso5171.workers.dev",
        "56.TLS.worker1.doviso5171.workers.dev",
        "57.TLS.worker1.gagiw15392.workers.dev",
        "58.TLS.worker1.gagiw15392.workers.dev",
        "59.TLS.worker1.gagiw15392.workers.dev",
        "60.TLS.worker1.gagiw15392.workers.dev",
        "61.TLS.worker1.gagiw15392.workers.dev",
        "62.TLS.worker1.gagiw15392.workers.dev",
        "63.TLS.worker1.gagiw15392.workers.dev",
        "64.TLS.worker1.pemeh92019.workers.dev",
        "65.TLS.worker1.pemeh92019.workers.dev",
        "66.TLS.worker1.pemeh92019.workers.dev",
        "67.TLS.worker1.pemeh92019.workers.dev",
        "68.TLS.worker1.pemeh92019.workers.dev",
        "69.TLS.worker1.pemeh92019.workers.dev",
        "70.TLS.worker1.pemeh92019.workers.dev"
      ]
    },
    {
      "tag": "URL-TEST",
      "type": "urltest",
      "outbounds": [
        "1.TLS.dry-star-6299.kexaxik407.workers.dev",
        "2.TLS.dry-star-6299.kexaxik407.workers.dev",
        "3.TLS.dry-star-6299.kexaxik407.workers.dev",
        "4.TLS.dry-star-6299.kexaxik407.workers.dev",
        "5.TLS.dry-star-6299.kexaxik407.workers.dev",
        "6.TLS.dry-star-6299.kexaxik407.workers.dev",
        "7.TLS.dry-star-6299.kexaxik407.workers.dev",
        "8.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "9.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "10.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "11.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "12.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "13.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "14.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
        "15.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "16.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "17.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "18.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "19.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "20.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "21.TLS.sweet-resonance-fd81.habenev179.workers.dev",
        "22.TLS.weathered-night-d51a.simax49258.workers.dev",
        "23.TLS.weathered-night-d51a.simax49258.workers.dev",
        "24.TLS.weathered-night-d51a.simax49258.workers.dev",
        "25.TLS.weathered-night-d51a.simax49258.workers.dev",
        "26.TLS.weathered-night-d51a.simax49258.workers.dev",
        "27.TLS.weathered-night-d51a.simax49258.workers.dev",
        "28.TLS.weathered-night-d51a.simax49258.workers.dev",
        "29.TLS.worker1.peramip455.workers.dev",
        "30.TLS.worker1.peramip455.workers.dev",
        "31.TLS.worker1.peramip455.workers.dev",
        "32.TLS.worker1.peramip455.workers.dev",
        "33.TLS.worker1.peramip455.workers.dev",
        "34.TLS.worker1.peramip455.workers.dev",
        "35.TLS.worker1.peramip455.workers.dev",
        "36.TLS.worker1.soketoj930.workers.dev",
        "37.TLS.worker1.soketoj930.workers.dev",
        "38.TLS.worker1.soketoj930.workers.dev",
        "39.TLS.worker1.soketoj930.workers.dev",
        "40.TLS.worker1.soketoj930.workers.dev",
        "41.TLS.worker1.soketoj930.workers.dev",
        "42.TLS.worker1.soketoj930.workers.dev",
        "43.TLS.worker1.wewotes286.workers.dev",
        "44.TLS.worker1.wewotes286.workers.dev",
        "45.TLS.worker1.wewotes286.workers.dev",
        "46.TLS.worker1.wewotes286.workers.dev",
        "47.TLS.worker1.wewotes286.workers.dev",
        "48.TLS.worker1.wewotes286.workers.dev",
        "49.TLS.worker1.wewotes286.workers.dev",
        "50.TLS.worker1.doviso5171.workers.dev",
        "51.TLS.worker1.doviso5171.workers.dev",
        "52.TLS.worker1.doviso5171.workers.dev",
        "53.TLS.worker1.doviso5171.workers.dev",
        "54.TLS.worker1.doviso5171.workers.dev",
        "55.TLS.worker1.doviso5171.workers.dev",
        "56.TLS.worker1.doviso5171.workers.dev",
        "57.TLS.worker1.gagiw15392.workers.dev",
        "58.TLS.worker1.gagiw15392.workers.dev",
        "59.TLS.worker1.gagiw15392.workers.dev",
        "60.TLS.worker1.gagiw15392.workers.dev",
        "61.TLS.worker1.gagiw15392.workers.dev",
        "62.TLS.worker1.gagiw15392.workers.dev",
        "63.TLS.worker1.gagiw15392.workers.dev",
        "64.TLS.worker1.pemeh92019.workers.dev",
        "65.TLS.worker1.pemeh92019.workers.dev",
        "66.TLS.worker1.pemeh92019.workers.dev",
        "67.TLS.worker1.pemeh92019.workers.dev",
        "68.TLS.worker1.pemeh92019.workers.dev",
        "69.TLS.worker1.pemeh92019.workers.dev",
        "70.TLS.worker1.pemeh92019.workers.dev"
      ],
      "url": "https://www.gstatic.com/generate_204",
      "interval": "20m",
      "tolerance": 50
    },
    {
      "tag": "direct",
      "type": "direct"
    },
    {
      "type": "vless",
      "tag": "1.TLS.dry-star-6299.kexaxik407.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "605f735f-d501-4f60-b042-79675044b6aa",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dry-star-6299.kexaxik407.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dry-star-6299.kexaxik407.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "2.TLS.dry-star-6299.kexaxik407.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "605f735f-d501-4f60-b042-79675044b6aa",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dry-star-6299.kexaxik407.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dry-star-6299.kexaxik407.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "3.TLS.dry-star-6299.kexaxik407.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "605f735f-d501-4f60-b042-79675044b6aa",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dry-star-6299.kexaxik407.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dry-star-6299.kexaxik407.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "4.TLS.dry-star-6299.kexaxik407.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "605f735f-d501-4f60-b042-79675044b6aa",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dry-star-6299.kexaxik407.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dry-star-6299.kexaxik407.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "5.TLS.dry-star-6299.kexaxik407.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "605f735f-d501-4f60-b042-79675044b6aa",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dry-star-6299.kexaxik407.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dry-star-6299.kexaxik407.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "6.TLS.dry-star-6299.kexaxik407.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "605f735f-d501-4f60-b042-79675044b6aa",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dry-star-6299.kexaxik407.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dry-star-6299.kexaxik407.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "7.TLS.dry-star-6299.kexaxik407.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "605f735f-d501-4f60-b042-79675044b6aa",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "dry-star-6299.kexaxik407.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "dry-star-6299.kexaxik407.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "8.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "8e71411f-204e-4226-9d81-1edb55efbfa3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "soft-fire-7ff4.yeliko7287.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "soft-fire-7ff4.yeliko7287.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "9.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "8e71411f-204e-4226-9d81-1edb55efbfa3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "soft-fire-7ff4.yeliko7287.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "soft-fire-7ff4.yeliko7287.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "10.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "8e71411f-204e-4226-9d81-1edb55efbfa3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "soft-fire-7ff4.yeliko7287.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "soft-fire-7ff4.yeliko7287.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "11.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "8e71411f-204e-4226-9d81-1edb55efbfa3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "soft-fire-7ff4.yeliko7287.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "soft-fire-7ff4.yeliko7287.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "12.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "8e71411f-204e-4226-9d81-1edb55efbfa3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "soft-fire-7ff4.yeliko7287.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "soft-fire-7ff4.yeliko7287.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "13.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "8e71411f-204e-4226-9d81-1edb55efbfa3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "soft-fire-7ff4.yeliko7287.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "soft-fire-7ff4.yeliko7287.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "14.TLS.soft-fire-7ff4.yeliko7287.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "8e71411f-204e-4226-9d81-1edb55efbfa3",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "soft-fire-7ff4.yeliko7287.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "soft-fire-7ff4.yeliko7287.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "15.TLS.sweet-resonance-fd81.habenev179.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "4688d7ab-706c-4ae8-81ff-c4afc14b84d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "sweet-resonance-fd81.habenev179.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "sweet-resonance-fd81.habenev179.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "16.TLS.sweet-resonance-fd81.habenev179.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "4688d7ab-706c-4ae8-81ff-c4afc14b84d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "sweet-resonance-fd81.habenev179.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "sweet-resonance-fd81.habenev179.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "17.TLS.sweet-resonance-fd81.habenev179.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "4688d7ab-706c-4ae8-81ff-c4afc14b84d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "sweet-resonance-fd81.habenev179.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "sweet-resonance-fd81.habenev179.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "18.TLS.sweet-resonance-fd81.habenev179.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "4688d7ab-706c-4ae8-81ff-c4afc14b84d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "sweet-resonance-fd81.habenev179.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "sweet-resonance-fd81.habenev179.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "19.TLS.sweet-resonance-fd81.habenev179.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "4688d7ab-706c-4ae8-81ff-c4afc14b84d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "sweet-resonance-fd81.habenev179.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "sweet-resonance-fd81.habenev179.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "20.TLS.sweet-resonance-fd81.habenev179.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "4688d7ab-706c-4ae8-81ff-c4afc14b84d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "sweet-resonance-fd81.habenev179.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "sweet-resonance-fd81.habenev179.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "21.TLS.sweet-resonance-fd81.habenev179.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "4688d7ab-706c-4ae8-81ff-c4afc14b84d9",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "sweet-resonance-fd81.habenev179.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "sweet-resonance-fd81.habenev179.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "22.TLS.weathered-night-d51a.simax49258.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "88dfdb56-2f92-4c22-869e-3b9818b653ff",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "weathered-night-d51a.simax49258.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "weathered-night-d51a.simax49258.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "23.TLS.weathered-night-d51a.simax49258.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "88dfdb56-2f92-4c22-869e-3b9818b653ff",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "weathered-night-d51a.simax49258.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "weathered-night-d51a.simax49258.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "24.TLS.weathered-night-d51a.simax49258.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "88dfdb56-2f92-4c22-869e-3b9818b653ff",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "weathered-night-d51a.simax49258.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "weathered-night-d51a.simax49258.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "25.TLS.weathered-night-d51a.simax49258.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "88dfdb56-2f92-4c22-869e-3b9818b653ff",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "weathered-night-d51a.simax49258.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "weathered-night-d51a.simax49258.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "26.TLS.weathered-night-d51a.simax49258.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "88dfdb56-2f92-4c22-869e-3b9818b653ff",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "weathered-night-d51a.simax49258.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "weathered-night-d51a.simax49258.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "27.TLS.weathered-night-d51a.simax49258.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "88dfdb56-2f92-4c22-869e-3b9818b653ff",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "weathered-night-d51a.simax49258.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "weathered-night-d51a.simax49258.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "28.TLS.weathered-night-d51a.simax49258.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "88dfdb56-2f92-4c22-869e-3b9818b653ff",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "weathered-night-d51a.simax49258.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "weathered-night-d51a.simax49258.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "29.TLS.worker1.peramip455.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "1854f3af-f5e8-4d61-b9d4-9a9888b80f38",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.peramip455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.peramip455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "30.TLS.worker1.peramip455.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "1854f3af-f5e8-4d61-b9d4-9a9888b80f38",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.peramip455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.peramip455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "31.TLS.worker1.peramip455.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "1854f3af-f5e8-4d61-b9d4-9a9888b80f38",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.peramip455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.peramip455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "32.TLS.worker1.peramip455.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "1854f3af-f5e8-4d61-b9d4-9a9888b80f38",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.peramip455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.peramip455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "33.TLS.worker1.peramip455.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "1854f3af-f5e8-4d61-b9d4-9a9888b80f38",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.peramip455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.peramip455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "34.TLS.worker1.peramip455.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "1854f3af-f5e8-4d61-b9d4-9a9888b80f38",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.peramip455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.peramip455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "35.TLS.worker1.peramip455.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "1854f3af-f5e8-4d61-b9d4-9a9888b80f38",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.peramip455.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.peramip455.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "36.TLS.worker1.soketoj930.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "9733a473-c989-42a0-ae45-bc7c8ec94fc6",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.soketoj930.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.soketoj930.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "37.TLS.worker1.soketoj930.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "9733a473-c989-42a0-ae45-bc7c8ec94fc6",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.soketoj930.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.soketoj930.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "38.TLS.worker1.soketoj930.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "9733a473-c989-42a0-ae45-bc7c8ec94fc6",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.soketoj930.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.soketoj930.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "39.TLS.worker1.soketoj930.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "9733a473-c989-42a0-ae45-bc7c8ec94fc6",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.soketoj930.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.soketoj930.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "40.TLS.worker1.soketoj930.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "9733a473-c989-42a0-ae45-bc7c8ec94fc6",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.soketoj930.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.soketoj930.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "41.TLS.worker1.soketoj930.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "9733a473-c989-42a0-ae45-bc7c8ec94fc6",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.soketoj930.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.soketoj930.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "42.TLS.worker1.soketoj930.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "9733a473-c989-42a0-ae45-bc7c8ec94fc6",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.soketoj930.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.soketoj930.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "43.TLS.worker1.wewotes286.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "1389e853-0996-4180-83e3-faea390b7790",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.wewotes286.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.wewotes286.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "44.TLS.worker1.wewotes286.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "1389e853-0996-4180-83e3-faea390b7790",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.wewotes286.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.wewotes286.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "45.TLS.worker1.wewotes286.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "1389e853-0996-4180-83e3-faea390b7790",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.wewotes286.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.wewotes286.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "46.TLS.worker1.wewotes286.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "1389e853-0996-4180-83e3-faea390b7790",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.wewotes286.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.wewotes286.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "47.TLS.worker1.wewotes286.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "1389e853-0996-4180-83e3-faea390b7790",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.wewotes286.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.wewotes286.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "48.TLS.worker1.wewotes286.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "1389e853-0996-4180-83e3-faea390b7790",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.wewotes286.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.wewotes286.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "49.TLS.worker1.wewotes286.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "1389e853-0996-4180-83e3-faea390b7790",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.wewotes286.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.wewotes286.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "50.TLS.worker1.doviso5171.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "9b9c33b6-02df-4149-9f9b-b2b65901ea13",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.doviso5171.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.doviso5171.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "51.TLS.worker1.doviso5171.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "9b9c33b6-02df-4149-9f9b-b2b65901ea13",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.doviso5171.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.doviso5171.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "52.TLS.worker1.doviso5171.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "9b9c33b6-02df-4149-9f9b-b2b65901ea13",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.doviso5171.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.doviso5171.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "53.TLS.worker1.doviso5171.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "9b9c33b6-02df-4149-9f9b-b2b65901ea13",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.doviso5171.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.doviso5171.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "54.TLS.worker1.doviso5171.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "9b9c33b6-02df-4149-9f9b-b2b65901ea13",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.doviso5171.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.doviso5171.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "55.TLS.worker1.doviso5171.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "9b9c33b6-02df-4149-9f9b-b2b65901ea13",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.doviso5171.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.doviso5171.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "56.TLS.worker1.doviso5171.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "9b9c33b6-02df-4149-9f9b-b2b65901ea13",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.doviso5171.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.doviso5171.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "57.TLS.worker1.gagiw15392.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "d3716b5b-0049-487a-90f1-dcc37dc31a6f",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gagiw15392.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gagiw15392.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "58.TLS.worker1.gagiw15392.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "d3716b5b-0049-487a-90f1-dcc37dc31a6f",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gagiw15392.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gagiw15392.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "59.TLS.worker1.gagiw15392.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "d3716b5b-0049-487a-90f1-dcc37dc31a6f",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gagiw15392.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gagiw15392.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "60.TLS.worker1.gagiw15392.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "d3716b5b-0049-487a-90f1-dcc37dc31a6f",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gagiw15392.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gagiw15392.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "61.TLS.worker1.gagiw15392.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "d3716b5b-0049-487a-90f1-dcc37dc31a6f",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gagiw15392.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gagiw15392.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "62.TLS.worker1.gagiw15392.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "d3716b5b-0049-487a-90f1-dcc37dc31a6f",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gagiw15392.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gagiw15392.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "63.TLS.worker1.gagiw15392.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "d3716b5b-0049-487a-90f1-dcc37dc31a6f",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.gagiw15392.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.gagiw15392.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "64.TLS.worker1.pemeh92019.workers.dev",
      "server": "172.66.43.157",
      "server_port": 8443,
      "uuid": "ba666ac7-4046-4349-b1dd-ff8b5776787a",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.pemeh92019.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.pemeh92019.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "65.TLS.worker1.pemeh92019.workers.dev",
      "server": "216.24.57.250",
      "server_port": 8443,
      "uuid": "ba666ac7-4046-4349-b1dd-ff8b5776787a",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.pemeh92019.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.pemeh92019.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "66.TLS.worker1.pemeh92019.workers.dev",
      "server": "63.141.128.17",
      "server_port": 8443,
      "uuid": "ba666ac7-4046-4349-b1dd-ff8b5776787a",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.pemeh92019.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.pemeh92019.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "67.TLS.worker1.pemeh92019.workers.dev",
      "server": "172.67.73.216",
      "server_port": 8443,
      "uuid": "ba666ac7-4046-4349-b1dd-ff8b5776787a",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.pemeh92019.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.pemeh92019.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "68.TLS.worker1.pemeh92019.workers.dev",
      "server": "8.6.112.64",
      "server_port": 8443,
      "uuid": "ba666ac7-4046-4349-b1dd-ff8b5776787a",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.pemeh92019.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.pemeh92019.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "69.TLS.worker1.pemeh92019.workers.dev",
      "server": "69.84.182.136",
      "server_port": 8443,
      "uuid": "ba666ac7-4046-4349-b1dd-ff8b5776787a",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.pemeh92019.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.pemeh92019.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "vless",
      "tag": "70.TLS.worker1.pemeh92019.workers.dev",
      "server": "45.67.215.153",
      "server_port": 8443,
      "uuid": "ba666ac7-4046-4349-b1dd-ff8b5776787a",
      "flow": "",
      "packet_encoding": "xudp",
      "tcp_fast_open": true,
      "multiplex": {
        "enabled": false,
        "protocol": "smux",
        "max_streams": 0
      },
      "tls": {
        "enabled": true,
        "server_name": "worker1.pemeh92019.workers.dev",
        "insecure": false,
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        },
        "alpn": [
          "http/1.1"
        ],
        "record_fragment": true
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
          "Host": "worker1.pemeh92019.workers.dev"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    }
  ],
  "route": {
    "default_domain_resolver": {
      "server": "dns-plain",
      "rewrite_ttl": 60
    },
    "auto_detect_interface": true,
    "override_android_vpn": true,
    "final": "proxy",
    "rules": [
      {
        "action": "sniff"
      },
      {
        "action": "hijack-dns",
        "mode": "or",
        "rules": [
          {
            "inbound": "dns-in"
          },
          {
            "protocol": "dns"
          },
          {
            "port": [
              53
            ]
          }
        ],
        "type": "logical"
      },
      {
        "ip_cidr": [
          "224.0.0.0/3",
          "ff00::/8"
        ],
        "source_ip_cidr": [
          "224.0.0.0/3",
          "ff00::/8"
        ],
        "action": "reject"
      },
      {
        "ip_cidr": [
          "10.10.34.34",
          "10.10.34.35",
          "10.10.34.36"
        ],
        "action": "reject"
      },
      {
        "ip_is_private": true,
        "outbound": "direct"
      },
      {
        "domain_suffix": [
          "ir"
        ],
        "outbound": "direct"
      },
      {
        "clash_mode": "direct",
        "outbound": "direct"
      },
      {
        "clash_mode": "tahrim",
        "outbound": "direct"
      }
    ]
  }
}
