<doc-view>

<v-layout row wrap>
<v-flex xs12 sm10 lg10>
<v-card class="section-def" v-bind:color="$store.state.currentColor">
<v-card-text class="pa-3">
<v-card class="section-def__card">
<v-card-text>
<dl>
<dt slot=title>GraalVM native image</dt>
<dd slot="desc"><p>Helidon applications can be compiled into a native executable using GraalVM
native image.</p>

<p>When using applications created using the CLI, or when you configure Helidon
application pom as a parent of your module, you can use the following steps to
build a native image from your application:</p>

<ol style="margin-left: 15px;">
<li>
Create an environment variable <code>GRAALVM_HOME</code> pointing to your installation of
GraalVM with <code>native-image</code> installed

</li>
<li>
Run Maven command <code>mvn clean package -Pnative-image</code>

</li>
<li>
Execute the native executable created in <code>target</code> directory of your project

</li>
</ol></dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_aot_supported_modules">AOT supported modules</h2>
<div class="section">
<p>Some Helidon components are not (yet) supported in native image, some have
restrictions. The following table lists all Helidon features and their support
for native image.</p>

<div class="block-title"><span>Helidon MP features in AOT</span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 6.667%;">
<col style="width: 13.333%;">
<col style="width: 40%;">
<col style="width: 40%;">
</colgroup>
<thead>
<tr>
<th>&#160;</th>
<th>Feature</th>
<th>Component</th>
<th>AOT note</th>
</tr>
</thead>
<tbody>
<tr>
<td class="">✅</td>
<td class=""><strong>CDI</strong></td>
<td class="">CDI</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Config</strong></td>
<td class="">Config</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Encryption</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">YAML</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Fault Tolerance</strong></td>
<td class="">Fault Tolerance</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Health</strong></td>
<td class="">Health</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Built-ins</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>JAX-RS</strong></td>
<td class="">JAX-RS</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>JPA</strong></td>
<td class="">JPA</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">❓</td>
<td class=""><strong>&#160;</strong></td>
<td class="">EclipseLink</td>
<td class="">Not yet tested.</td>
</tr>
<tr>
<td class="">🔶</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Hibernate</td>
<td class="">Experimental support, tested on limited use cases with Helidon Oracle and H2 JDBC modules</td>
</tr>
<tr>
<td class="">🔶</td>
<td class=""><strong>JTA</strong></td>
<td class="">JTA</td>
<td class="">Experimental support, tested on limited use cases</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Messaging</strong></td>
<td class="">Messaging</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Metrics</strong></td>
<td class="">Metrics</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Open API</strong></td>
<td class="">Open API</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">🔶</td>
<td class=""><strong>REST Client</strong></td>
<td class="">REST Client</td>
<td class="">Does not support execution of default methods on interfaces.</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Security</strong></td>
<td class="">Security</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Integration: Jersey</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Integration: WebServer</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Integration: gRPC</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">JWT Auth</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">OIDC</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider: ABAC</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">❓</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider/ABAC/Policy: EL</td>
<td class="">Not yet tested.</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider/ABAC: Role</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider/ABAC: Scope</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider/ABAC: Time</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">❓</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider: Google Login</td>
<td class="">Not yet tested.</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider: Header</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider: HTTP Basic</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider: HTTP Digest</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider: HTTP Signatures</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">❓</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider: IDCS Role Mapper</td>
<td class="">Not yet tested.</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Provider: JWT</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Server</strong></td>
<td class="">Server</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Access Log</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">CORS</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Tracing</strong></td>
<td class="">Tracing</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Integration: Jersey Server</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Integration: Jersey Client</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Jaeger</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Zipkin</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Web Client</strong></td>
<td class="">Web Client</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Metrics</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Security</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Tracing</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">❓</td>
<td class=""><strong>Websocket</strong></td>
<td class="">Websocket</td>
<td class="">Not yet tested.</td>
</tr>
<tr>
<td class="">❓</td>
<td class=""><strong>gRPC Server</strong></td>
<td class="">gRPC Server</td>
<td class="">Not yet tested.</td>
</tr>
<tr>
<td class="">❓</td>
<td class=""><strong>gRPC Client</strong></td>
<td class="">gRPC Client</td>
<td class="">Not yet tested.</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>&#160;</strong></td>
<td class="">Metrics</td>
<td class="">&#160;</td>
</tr>
<tr>
<td class="">✅</td>
<td class=""><strong>Metrics</strong></td>
<td class="">Metrics</td>
<td class="">&#160;</td>
</tr>
</tbody>
</table>
</div>
</div>
</doc-view>