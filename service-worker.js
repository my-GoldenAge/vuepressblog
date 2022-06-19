/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "724d5ab29a26e22182116dcbc23721e3"
  },
  {
    "url": "assets/css/0.styles.6b8489ed.css",
    "revision": "f2a4d96249fe02eaf8e83353f6bf5b14"
  },
  {
    "url": "assets/img/acquire()方法的执行流程.ee7c2e29.svg",
    "revision": "ee7c2e2919968be6c90af891f921372d"
  },
  {
    "url": "assets/img/BlockingQueue和BlockingDeque的区别.79912b77.png",
    "revision": "79912b771b19a206aad0ff83ccf8afae"
  },
  {
    "url": "assets/img/ConcurrentHashMap扩容示意图.d66fce63.png",
    "revision": "d66fce6379ff928784e86ac474e3e5a2"
  },
  {
    "url": "assets/img/ConcurrentHashMap散列桶数组结构示意图.0d1796fc.png",
    "revision": "0d1796fc0f555cdea62aaabb2eef77da"
  },
  {
    "url": "assets/img/concurrent包实现整体示意图.5125cef5.png",
    "revision": "5125cef50eb17023f2e57696174cb86e"
  },
  {
    "url": "assets/img/condition下的等待通知机制.a6fe16c5.png",
    "revision": "a6fe16c52927575bfb3b93d0fe7ce578"
  },
  {
    "url": "assets/img/CyclicBarrier执行示意图.86a0061a.jpg",
    "revision": "86a0061adcb830174a06ed3b188bd711"
  },
  {
    "url": "assets/img/debug模式下情景图.90b771ac.png",
    "revision": "90b771ac476d5ac173941b3511f2af22"
  },
  {
    "url": "assets/img/executor.23f15131.png",
    "revision": "23f1513173037ea6122313a44eeef02d"
  },
  {
    "url": "assets/img/f65cc83b7b4664916fad5d1398a36005.c46db965.png",
    "revision": "c46db965cde9dbf8095e9da6752e4fc0"
  },
  {
    "url": "assets/img/FutureTask状态迁移图.5cee6844.jpg",
    "revision": "5cee6844ffe114b9ef7f835c8e99a2ff"
  },
  {
    "url": "assets/img/happens-before.e3d5743e.jpg",
    "revision": "e3d5743edb048c76f90e8ece8a377b2f"
  },
  {
    "url": "assets/img/happens-before与JMM的关系.992cdb73.png",
    "revision": "992cdb73eeac7cf54d591911a4f5b5c3"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/image-20220327164641390.5cc9bf67.png",
    "revision": "5cc9bf675f2aef3c95a769f0ce59704d"
  },
  {
    "url": "assets/img/image-20220327172334688.9a4bedfd.png",
    "revision": "9a4bedfd3ff19b03b9975436ddca6818"
  },
  {
    "url": "assets/img/image-20220327172538381.5812d3d7.png",
    "revision": "5812d3d7e09e828f603b9787d4145bc9"
  },
  {
    "url": "assets/img/image-20220327173657164.fd8e0e13.png",
    "revision": "fd8e0e13f20ffcae8b0c037f3da53422"
  },
  {
    "url": "assets/img/image-20220328141205122.7ffde4d7.png",
    "revision": "7ffde4d7635e39266f7185189b4be8bf"
  },
  {
    "url": "assets/img/image-20220328141254080.59db9cf2.png",
    "revision": "59db9cf2ebf122d7b5cb9d793fb0b538"
  },
  {
    "url": "assets/img/image-20220328163758219.40970c69.png",
    "revision": "40970c6958261a6b37f60d0a6231f1ec"
  },
  {
    "url": "assets/img/image-20220328180227620.a047aae0.png",
    "revision": "a047aae0a428c7c2fb3dc776e0aee822"
  },
  {
    "url": "assets/img/image-20220328180549833.8f35e3d6.png",
    "revision": "8f35e3d611d3fa3ba4fbc2bf3c058c41"
  },
  {
    "url": "assets/img/image-20220328180723509.8a38520a.png",
    "revision": "8a38520ace4cf80c1e3724e0a3506cc8"
  },
  {
    "url": "assets/img/image-20220329150735822.31b4a4df.png",
    "revision": "31b4a4dff132516e92909c8f14b0825e"
  },
  {
    "url": "assets/img/image-20220329150922305.f84c01c1.png",
    "revision": "f84c01c120c7d78de04f5c5361c429a7"
  },
  {
    "url": "assets/img/image-20220329151324317.e2054b6e.png",
    "revision": "e2054b6ec1e004944ba2324b7b6f6884"
  },
  {
    "url": "assets/img/image-20220329151405399.76e1d45f.png",
    "revision": "76e1d45fc2c43792cba97eb60680a3ff"
  },
  {
    "url": "assets/img/image-20220329164851674.4d93a59e.png",
    "revision": "4d93a59e8d62a92518cdba9865055c51"
  },
  {
    "url": "assets/img/image-20220329164911472.36bb2508.png",
    "revision": "36bb250887b8a27a0d1e0dd63f34f943"
  },
  {
    "url": "assets/img/image-20220329175517472.d6ead413.png",
    "revision": "d6ead413a701cca1353968d0fd9a63a9"
  },
  {
    "url": "assets/img/image-20220329175827201.1a5ad4f3.png",
    "revision": "1a5ad4f3bbf3c302db0d7c4cb8805370"
  },
  {
    "url": "assets/img/image-20220329175944110.b5dba806.png",
    "revision": "b5dba806e13eb0e21cd41ed72f655248"
  },
  {
    "url": "assets/img/image-20220329181026200.703368cd.png",
    "revision": "703368cd35bd090c6f52ff7076bd7b7f"
  },
  {
    "url": "assets/img/image-20220402142248572.6d32b364.png",
    "revision": "6d32b36494896802b0ce7967ab26c4de"
  },
  {
    "url": "assets/img/image-20220402142531468.ef63d814.png",
    "revision": "ef63d814975aa908f64055876c1e50b1"
  },
  {
    "url": "assets/img/image-20220402155855198.88dc1bd6.png",
    "revision": "88dc1bd621206eabc933d28e173554bf"
  },
  {
    "url": "assets/img/image-20220402160542975.ad2cb0c5.png",
    "revision": "ad2cb0c552afc5c6327366751ead0f4d"
  },
  {
    "url": "assets/img/image-20220402161241738.faeb4a20.png",
    "revision": "faeb4a20233b0cd4757b783dfcebe359"
  },
  {
    "url": "assets/img/image-20220402162623340.3c50d05b.png",
    "revision": "3c50d05b937a43262912c5fd0d5f9b4b"
  },
  {
    "url": "assets/img/image-20220404143328321.6bea9bdf.png",
    "revision": "6bea9bdf0353ea401c01b25198451a72"
  },
  {
    "url": "assets/img/image-20220404144428658.c5b2f7a5.png",
    "revision": "c5b2f7a5fa25d3aab34bfa852820ee9e"
  },
  {
    "url": "assets/img/image-20220404145736172.b5a678e0.png",
    "revision": "b5a678e0789b6f6c0d7edeaf410660e5"
  },
  {
    "url": "assets/img/image-20220404152614165.6a9e8ce0.png",
    "revision": "6a9e8ce020984843f095155bba5c9329"
  },
  {
    "url": "assets/img/image-20220404153039588.2bf7cc20.png",
    "revision": "2bf7cc202171cb96fe83599caadfadcd"
  },
  {
    "url": "assets/img/image-20220404174332802.b1b7fb80.png",
    "revision": "b1b7fb800092c95848cb07a0c5c8e8f9"
  },
  {
    "url": "assets/img/image-20220404174605431.e4f83f1f.png",
    "revision": "e4f83f1f8b8c0bd877677c0a01ebcb5c"
  },
  {
    "url": "assets/img/image-20220404174659118.2a1b3199.png",
    "revision": "2a1b3199c87d18e826baea874feab6cc"
  },
  {
    "url": "assets/img/image-20220404181453451.4eed918d.png",
    "revision": "4eed918d408097faa754700646f731c3"
  },
  {
    "url": "assets/img/image-20220408143841504.c6def2ce.png",
    "revision": "c6def2ceafa697041c8cd298e046fadf"
  },
  {
    "url": "assets/img/image-20220408170820826.9d7bd28c.png",
    "revision": "9d7bd28cd547635dfd26ee4697266cad"
  },
  {
    "url": "assets/img/image-20220408175317598.65a6c8e9.png",
    "revision": "65a6c8e93e239130ef6d684390be2a29"
  },
  {
    "url": "assets/img/image-20220408175543674.7b24ebd2.png",
    "revision": "7b24ebd2be2532d2172612b28a547176"
  },
  {
    "url": "assets/img/image-20220408181652588.7ab3adad.png",
    "revision": "7ab3adadd90dac23e485691ed2e0ae31"
  },
  {
    "url": "assets/img/image-20220409155823763.9d488989.png",
    "revision": "9d488989a165d30be2cab9e7c69b2dde"
  },
  {
    "url": "assets/img/image-20220411152150611.edcc8591.png",
    "revision": "edcc859121c2cbe7fc45aee9ca53d7f6"
  },
  {
    "url": "assets/img/image-20220414135431616.4da17802.png",
    "revision": "4da1780210dca8f01e78d1709e23f0d1"
  },
  {
    "url": "assets/img/image-20220417142051216.1b970a41.png",
    "revision": "1b970a410bf3f6bd3b8388fd0a726300"
  },
  {
    "url": "assets/img/image-20220417142411902.f0a91d14.png",
    "revision": "f0a91d142f95d807b5cb82f3f8ef1974"
  },
  {
    "url": "assets/img/image-20220417142645417.124d45ec.png",
    "revision": "124d45ec8ede1e3a14e77c567e120b7e"
  },
  {
    "url": "assets/img/j-a-q-s-ex-9.9478a1ba.png",
    "revision": "9478a1ba244f3ba810b9240c31ef060a"
  },
  {
    "url": "assets/img/JMM内存结构抽象结构示意图.605f44cb.png",
    "revision": "605f44cb62790437c5c809e10e236787"
  },
  {
    "url": "assets/img/JMM层级图.de74f4be.png",
    "revision": "de74f4be7b0db79f65d6c7c39bd3be81"
  },
  {
    "url": "assets/img/JMM设计示意图.11426efa.png",
    "revision": "11426efa7006dc2af2dff65c22fc3be4"
  },
  {
    "url": "assets/img/mutex的执行情况.dc80456b.png",
    "revision": "dc80456ba06cef00c43810e4134d1c73"
  },
  {
    "url": "assets/img/Node2从队列中出队后的状态.03b8375c.png",
    "revision": "03b8375c8fd38c5e4e59d6c8ad2a7564"
  },
  {
    "url": "assets/img/QQ20170313-231557@2x.1cbe9a21.png",
    "revision": "1cbe9a214e476eb53fb7dde9e641994c"
  },
  {
    "url": "assets/img/QQ20170314-003640.311a6660.png",
    "revision": "311a666074ec742fd69a8221edd4ae4b"
  },
  {
    "url": "assets/img/QQ20170314-235854.829f3b5f.png",
    "revision": "829f3b5f79ababe8294a287d86fcb751"
  },
  {
    "url": "assets/img/QQ20170315-014004.315269c5.png",
    "revision": "315269c576e2ae1558ee3e783bfea69f"
  },
  {
    "url": "assets/img/QQ20170315-014948.f26c7dfa.png",
    "revision": "f26c7dfa45665d3a9196c7ab79641e68"
  },
  {
    "url": "assets/img/QQ20170406-230647.149d616b.png",
    "revision": "149d616befbc860f1fd36f9b8b894682"
  },
  {
    "url": "assets/img/ScheduledThreadPoolExecutor类的UML图.bc1b3cb1.png",
    "revision": "bc1b3cb1f72b076e5ff6ce70df6aec65"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/synchronizedDemo.class.dbdf1e87.png",
    "revision": "dbdf1e876bae102d779fed62842e2fb4"
  },
  {
    "url": "assets/img/ThreadLocal各引用间的关系.dcb5e4eb.png",
    "revision": "dcb5e4eb32c23b7d462816a2e0aa4767"
  },
  {
    "url": "assets/img/threadpool-lifecycle.75864be6.png",
    "revision": "75864be6a5b0d2e61afd2de40d7d1fef"
  },
  {
    "url": "assets/img/threadpool-status.fcc64465.png",
    "revision": "fcc64465ef4d481e6001aeebc1e61a85"
  },
  {
    "url": "assets/img/不加volatile可能的执行时序.60672dcb.png",
    "revision": "60672dcb01eea35e00fdd38ffd25eb4b"
  },
  {
    "url": "assets/img/中断线程方法-164821637606711.e103c1e3.png",
    "revision": "e103c1e35753ce782d46c398516455d0"
  },
  {
    "url": "assets/img/从源码到最终执行的指令序列的示意图.ba6f08ab.png",
    "revision": "ba6f08abc3683c1cf6a87e6ff04209c3"
  },
  {
    "url": "assets/img/偏向锁撤销流程.df657524.png",
    "revision": "df6575241d87427d52614cabdeca464f"
  },
  {
    "url": "assets/img/最终一致性的分析.c92919b0.png",
    "revision": "c92919b0077bca11b643b225c9bb6497"
  },
  {
    "url": "assets/img/多个线程offer.ebd6a63f.jpg",
    "revision": "ebd6a63f49d960442b00135bf44062f4"
  },
  {
    "url": "assets/img/对象，对象监视器，同步队列和线程状态的关系.1c281887.png",
    "revision": "1c281887839b76a2e21e8384c0569114"
  },
  {
    "url": "assets/img/开放定址法示意图.fb39832d.jpg",
    "revision": "fb39832d7a495481bfc6e7e6185951ef"
  },
  {
    "url": "assets/img/当前节点引用线程获取锁，当前节点设置为队列头结点.070c9b9c.png",
    "revision": "070c9b9c4f85360e8a315b2323dd2191"
  },
  {
    "url": "assets/img/王小波.20b2575f.jpg",
    "revision": "20b2575fb7f13891060e8e548571f3d4"
  },
  {
    "url": "assets/img/王小波2.6b22941e.jpg",
    "revision": "6b22941ec8a91b4b76d5aaba62afb414"
  },
  {
    "url": "assets/img/线程A和线程B可能存在的执行时序.4b7ffae4.png",
    "revision": "4b7ffae43c5bd289eabd22656697dccd"
  },
  {
    "url": "assets/img/线程B进行poll后队列的状态图.6a7d9dc9.png",
    "revision": "6a7d9dc91377ce5483bc20469ce72e97"
  },
  {
    "url": "assets/img/线程状态-16482163576159.eb5da2c7.png",
    "revision": "eb5da2c72cc1f7997779e5c4bcfea8b8"
  },
  {
    "url": "assets/img/线程状态转换关系-16482163167647.263cc987.png",
    "revision": "263cc9871407af986f174fae99a7ca32"
  },
  {
    "url": "assets/img/超时等待式获取锁（doAcquireNanos()方法）.452d27c3.png",
    "revision": "452d27c328a31b472efd3012d55753cf"
  },
  {
    "url": "assets/img/队列进行入队操作后casTail失败后的状态图.0efca00f.png",
    "revision": "0efca00fb284ca71a1f002bb4382e7c5"
  },
  {
    "url": "assets/js/1.e3a634da.js",
    "revision": "45e1198c0b64d4d55485a537bf535981"
  },
  {
    "url": "assets/js/10.33f4d679.js",
    "revision": "dfae6432997cb9e3bca105f37308fec7"
  },
  {
    "url": "assets/js/11.633d59fc.js",
    "revision": "f7807b9d4db8ac3ed50ad00ad62cbfcf"
  },
  {
    "url": "assets/js/12.6566debe.js",
    "revision": "9f6c5c3a6f13effe502cebfddaca154b"
  },
  {
    "url": "assets/js/13.813b91b9.js",
    "revision": "96341fd739a724a330cd1ccb0be6a160"
  },
  {
    "url": "assets/js/14.0508579e.js",
    "revision": "9147a0fd75ed5572fc66b41619ef05ac"
  },
  {
    "url": "assets/js/15.bea71415.js",
    "revision": "fbf2da316647b8b496077d0b8636cbef"
  },
  {
    "url": "assets/js/16.d5a87820.js",
    "revision": "48b6effadc63cefc26a1026460a98289"
  },
  {
    "url": "assets/js/17.a3ea973d.js",
    "revision": "474dcb10f3a13168ae3efce884a2f574"
  },
  {
    "url": "assets/js/18.cdcd3e86.js",
    "revision": "fbe9bbb96114d30cd0278c3472efc1ef"
  },
  {
    "url": "assets/js/19.f57142c1.js",
    "revision": "a703186c091e97f2d0c92606cde259d6"
  },
  {
    "url": "assets/js/20.9ff399c5.js",
    "revision": "efd7336da2e1552d1f50bb37edf0ce48"
  },
  {
    "url": "assets/js/21.bab6863c.js",
    "revision": "8072f14ba283c3eeb764d42e994b14cf"
  },
  {
    "url": "assets/js/22.551758a7.js",
    "revision": "cb389d56e1e529b670e48036d52922e1"
  },
  {
    "url": "assets/js/23.18ff150a.js",
    "revision": "b6d757ca4e5a1e21440432f904ea2988"
  },
  {
    "url": "assets/js/24.97cc5fe7.js",
    "revision": "06e602b488691165e026458e800e9c88"
  },
  {
    "url": "assets/js/25.ef5f5151.js",
    "revision": "b7732f380e66ec28c464d333baca867f"
  },
  {
    "url": "assets/js/26.d8424825.js",
    "revision": "0c1db2a24d8f020cbb8ea88d89dd6116"
  },
  {
    "url": "assets/js/27.fe42ac28.js",
    "revision": "b3d3de51fea3c6f6c2725fa46355bf5f"
  },
  {
    "url": "assets/js/28.306a195b.js",
    "revision": "8951f45f0aa8f528f064302628d98497"
  },
  {
    "url": "assets/js/29.15b3a25f.js",
    "revision": "5584aef860a6e2a34ff925deb7d046c1"
  },
  {
    "url": "assets/js/30.f58e0ff8.js",
    "revision": "45939644835e8f38c6d6dc105bbcdd10"
  },
  {
    "url": "assets/js/31.189d9dfa.js",
    "revision": "b126fa47dbe708b13da14002728c1124"
  },
  {
    "url": "assets/js/32.904cde6d.js",
    "revision": "8fa0919ea8e3af87b12856cb30b4f2ab"
  },
  {
    "url": "assets/js/33.b7ad2e8e.js",
    "revision": "ec109e0b28fd2bb81d3a15baec510771"
  },
  {
    "url": "assets/js/34.f59e295f.js",
    "revision": "8e4879554ab78bc52c321f4a08dc391a"
  },
  {
    "url": "assets/js/35.d200411a.js",
    "revision": "36efd4bb3fe47cfbc663bdf1a85c0e5a"
  },
  {
    "url": "assets/js/36.b94f3fd5.js",
    "revision": "72e049de62a02975a6867bc9da149882"
  },
  {
    "url": "assets/js/37.ddc71590.js",
    "revision": "ace4406e53a4efc827fb04e0253b38cb"
  },
  {
    "url": "assets/js/38.a788387b.js",
    "revision": "0e13c830f3d709d7fb8fec08d2f33ac2"
  },
  {
    "url": "assets/js/39.162e9808.js",
    "revision": "11409364c788b7ad3fbd078fb6b21f4f"
  },
  {
    "url": "assets/js/4.87cca1e2.js",
    "revision": "055c791b90279b7cfe1f6ad792f2ec01"
  },
  {
    "url": "assets/js/40.f0c34f21.js",
    "revision": "75102903678b8e3b7ffe3c89ea0c24d4"
  },
  {
    "url": "assets/js/41.9579425d.js",
    "revision": "071efa8d315f60a460c96c81b286cd0f"
  },
  {
    "url": "assets/js/42.2a8be507.js",
    "revision": "9ff5b69424b38fef03d4deb6a3e6ed5a"
  },
  {
    "url": "assets/js/43.9bee127f.js",
    "revision": "ea79a7f27bcd18ff1ef27b96b216ae9a"
  },
  {
    "url": "assets/js/44.6afdaaec.js",
    "revision": "31c00b15cae7626b9625aa35e4a41027"
  },
  {
    "url": "assets/js/45.ecc58971.js",
    "revision": "6cf9f4374d7a86c212afbd96920144ab"
  },
  {
    "url": "assets/js/5.5f552971.js",
    "revision": "cba4af49bf8774ea8afbceee9145586f"
  },
  {
    "url": "assets/js/6.1c9f3509.js",
    "revision": "9014f0ebb8297528c04333b94ed589be"
  },
  {
    "url": "assets/js/7.e627bf76.js",
    "revision": "b6b7077d78177b473be92785fbc6d0c6"
  },
  {
    "url": "assets/js/8.4a7ea6d0.js",
    "revision": "f40afe9c466c6c8ea69a58fc21e394bf"
  },
  {
    "url": "assets/js/9.3f961077.js",
    "revision": "1310e670ef449db04facbd9815ba2447"
  },
  {
    "url": "assets/js/app.1688b474.js",
    "revision": "e0d3bee38971546f244b9f6112edc4b5"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.83bdf470.js",
    "revision": "eb972789d76932428e48eb1ef4d8c87c"
  },
  {
    "url": "avatar.png",
    "revision": "40d386b0c0aa14c26064cb5da84b3705"
  },
  {
    "url": "categories/Idea/index.html",
    "revision": "dad637ed665a7535695ab4217e398b1c"
  },
  {
    "url": "categories/index.html",
    "revision": "888b77e36fb79f4cb2fba5beff540f23"
  },
  {
    "url": "categories/技术/index.html",
    "revision": "3b4aa154aa54be6d03aef0b85982c9e8"
  },
  {
    "url": "categories/技术/page/2/index.html",
    "revision": "94911f175ac1322e68f5217212378d71"
  },
  {
    "url": "categories/技术/page/3/index.html",
    "revision": "6cf62bf40b4507c7df9eeca6370989b0"
  },
  {
    "url": "css/style.css",
    "revision": "b26094081fb6daf24d19b7f3268dd88e"
  },
  {
    "url": "guide/index.html",
    "revision": "e9ff1d111da1624124f403625f97acde"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "Idea/01、爱情.html",
    "revision": "2011676d14ee5e6d5309c3c93e7e6da4"
  },
  {
    "url": "Idea/02、人生境界究竟指什么.html",
    "revision": "ae5f7fdbd0abcb21472c9866e45ad87d"
  },
  {
    "url": "Idea/03、青年节前夕....html",
    "revision": "f900d4f200a230556c65b28c55556393"
  },
  {
    "url": "Idea/index.html",
    "revision": "3d6d13af46fc461c34c097375a0238a4"
  },
  {
    "url": "Idea/王小波/index.html",
    "revision": "b34542b9d5336b2daa1095b47c53152b"
  },
  {
    "url": "Idea/王小波/黄金时代.html",
    "revision": "51f6b645a6a27785e93fd8edf6227e2f"
  },
  {
    "url": "img/5.jpg",
    "revision": "52fe0a5d3dfd651494bef30864cd6698"
  },
  {
    "url": "img/51.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "index.html",
    "revision": "f0100e2f8eb1b79136574737c20ef55b"
  },
  {
    "url": "Java/Java并发编程的艺术/01、并发编程面临的挑战.html",
    "revision": "c9581103b1ef6bba50a07f07ffa73c79"
  },
  {
    "url": "Java/Java并发编程的艺术/02、线程的状态转换以及基本操作.html",
    "revision": "0007ffc495dcf3c41f75d66f36798246"
  },
  {
    "url": "Java/Java并发编程的艺术/03、Java内存模型以及happens-before.html",
    "revision": "698d6b23966ea55b457de7715d165f39"
  },
  {
    "url": "Java/Java并发编程的艺术/04、彻底理解synchronized.html",
    "revision": "8d0de4794273791ec853501ef6169597"
  },
  {
    "url": "Java/Java并发编程的艺术/05、彻底理解volatile.html",
    "revision": "a4d5b31d30662ca5c664fea7a5807b31"
  },
  {
    "url": "Java/Java并发编程的艺术/06、你真的了解final吗？.html",
    "revision": "0954eaec9384b5eba63622e030c31bbb"
  },
  {
    "url": "Java/Java并发编程的艺术/07、三大性质总结：原子性、可见性以及有序性.html",
    "revision": "9dc6f2ea77744ba555cfcfa034af3fd6"
  },
  {
    "url": "Java/Java并发编程的艺术/08、初识Lock与AbstractQueuedSynchronizer-AQS.html",
    "revision": "47d1c0185b530f1d8a71272c6135cba7"
  },
  {
    "url": "Java/Java并发编程的艺术/09、深入理解AbstractQueuedSynchronizer-AQS.html",
    "revision": "a3a9aca5c5f33295ff126ea588ca8939"
  },
  {
    "url": "Java/Java并发编程的艺术/10、ReentrantLock的重入性与公平性.html",
    "revision": "5667981fab3f88a0228e88ae476b5ca9"
  },
  {
    "url": "Java/Java并发编程的艺术/11、深入理解读写锁ReentrantReadWriteLock.html",
    "revision": "093ee48519bd85cb0f0ffa525300073c"
  },
  {
    "url": "Java/Java并发编程的艺术/12、详解Condition的线程通信机制.html",
    "revision": "9e2b699935ae6fdd97ef6a8c6666b0a3"
  },
  {
    "url": "Java/Java并发编程的艺术/13、LockSupport工具.html",
    "revision": "4e024d0a8043a671e696834d373c0917"
  },
  {
    "url": "Java/Java并发编程的艺术/14、并发容器之ConcurrentHashMap-JDK1.8.html",
    "revision": "cd4db96b49cc9770b489295b985704ab"
  },
  {
    "url": "Java/Java并发编程的艺术/15、并发容器之ConcurrentLinkedQueue.html",
    "revision": "3eaacb552ef8ed9312ecccd76cab21e9"
  },
  {
    "url": "Java/Java并发编程的艺术/16、并发容器之CopyOnWriteArrayList.html",
    "revision": "529c6d848d4501571c9166091c179152"
  },
  {
    "url": "Java/Java并发编程的艺术/17、并发容器之ThreadLocal.html",
    "revision": "8f610fa7fc240bd1177f063b2a6b1146"
  },
  {
    "url": "Java/Java并发编程的艺术/18、并发容器之BlockingQueue.html",
    "revision": "955ad1778db718aa583e2a8bf6ad5246"
  },
  {
    "url": "Java/Java并发编程的艺术/19、线程池ThreadPoolExecutor实现原理.html",
    "revision": "7253caa5176515a2d63db9bfa9e9b489"
  },
  {
    "url": "Java/Java并发编程的艺术/20、线程池之ScheduledThreadPoolExecutor.html",
    "revision": "79ed53e8c9608df1316162b7653f4f42"
  },
  {
    "url": "Java/Java并发编程的艺术/21、FutureTask源码解析.html",
    "revision": "5c663164a1ce0a0fab9972c7335ee346"
  },
  {
    "url": "Java/Java并发编程的艺术/22、Java中atomic包中的原子操作类总结.html",
    "revision": "1b689d1d4272ac002ef78951e9b92da1"
  },
  {
    "url": "Java/Java并发编程的艺术/23、CountDownLatch与CyclicBarrier计数器.html",
    "revision": "691498431548c42aede02a59a1c8f982"
  },
  {
    "url": "Java/Java并发编程的艺术/24、java并发工具类-Semaphore，Exchanger.html",
    "revision": "65cd5e7232bc47a6536da260e28d9ae3"
  },
  {
    "url": "Java/Java并发编程的艺术/25、彻底弄懂生产者--消费者问题.html",
    "revision": "1a38a9344ec3cd2151e9572a9b5b9cae"
  },
  {
    "url": "Java/Java并发编程的艺术/index.html",
    "revision": "8a44a650b981697109e7d9b6b8675d8a"
  },
  {
    "url": "js/custom.js",
    "revision": "5fc6c6a52b6e476283ccd926f226489c"
  },
  {
    "url": "tag/index.html",
    "revision": "8d5209ccb425a232f6fe5bfc70cf6b48"
  },
  {
    "url": "tags/Idea/index.html",
    "revision": "4595d731493087b92bac7776fc6031e3"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "d6b7d82c95527d6bb3f4e3b458d5fefe"
  },
  {
    "url": "tags/Java/page/2/index.html",
    "revision": "c45c04fcafa2d8acce824ae06fc5935c"
  },
  {
    "url": "tags/Java/page/3/index.html",
    "revision": "0af8268b47edec7aacb5c869747dd26a"
  },
  {
    "url": "tags/Java并发编程/index.html",
    "revision": "b3f414537dfac3c4f2b52c214c077873"
  },
  {
    "url": "tags/Java并发编程/page/2/index.html",
    "revision": "afbf9bb956d9a3b7e6853b27314485a0"
  },
  {
    "url": "tags/Java并发编程/page/3/index.html",
    "revision": "9c9fb697f6692c67dd7803433ded6a35"
  },
  {
    "url": "tags/JUC/index.html",
    "revision": "db6a1a8698cfff850b9a6c1f155ec67f"
  },
  {
    "url": "tags/JUC/page/2/index.html",
    "revision": "203c189acbb0e7047d34162c0c8ee687"
  },
  {
    "url": "tags/JUC/page/3/index.html",
    "revision": "1d9f95b6bf7dbf663e3410ada80308be"
  },
  {
    "url": "tags/人生境界/index.html",
    "revision": "0b3bc1f8f5c0b757565a86929b3b5113"
  },
  {
    "url": "tags/爱情/index.html",
    "revision": "567cd2746e66684a7dd06f4480c936e3"
  },
  {
    "url": "tags/王小波/index.html",
    "revision": "912affa315191a446dbd8b33d6ee6c88"
  },
  {
    "url": "tags/青年节/index.html",
    "revision": "6674eab0ee7e7cd604b97bf531d4484a"
  },
  {
    "url": "tags/黄金时代/index.html",
    "revision": "81e21714f43a8724f57811b78ea8d06d"
  },
  {
    "url": "timeline/index.html",
    "revision": "57119f681c04014318c7d261f9e94d6d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
