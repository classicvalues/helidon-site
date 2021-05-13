<doc-view>

<h2 id="maven-coordinates">Maven Coordinates</h2>
<div class="section">
<p>To enable Jersey (JAX-RS) Support
add the following dependency to your project&#8217;s <code>pom.xml</code> (see <router-link to="/about/04_managing-dependencies">Managing Dependencies</router-link>).</p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-jersey&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_jax_rs_support">JAX-RS Support</h2>
<div class="section">
<p>You can register a Jersey (JAX-RS) application at a <em>context root</em> using the
 <code>JerseySupport</code> class.</p>


<h3 id="_registering_a_jersey_application">Registering a Jersey Application</h3>
<div class="section">
<p>To register a <strong>Jersey</strong> application at a context root, use the
 <code>JerseySupport</code> class and its <code>JerseySupport.Builder</code> builder.</p>

<p><code>JerseySupport</code> can register the JAX-RS resources directly.</p>

<markup
lang="java"
title="Jersey (JAX-RS) <code>HelloWorld</code> resource"
>@Path("/")
public class HelloWorld {

    @GET
    @Path("hello")
    public Response hello() {
        return Response.ok("Hello World!").build();
    }
}</markup>

<markup
lang="java"
title="Registering the <code>HelloWorld</code> resource"
>Routing.builder()
       .register("/jersey", <span class="conum" data-value="1" />
                 JerseySupport.builder()
                              .register(HelloWorld.class) <span class="conum" data-value="2" />
                              .build())
       .build();</markup>

<ul class="colist">
<li data-value="1">Register the Jersey application at <code>/jersey</code> context root</li>
<li data-value="2">The Jersey <code>Application</code> stays hidden and consists of a single <code>HelloWorld</code>
resource class</li>
</ul>
<p>As a result, an HTTP GET request to <code>/jersey/hello</code> would yield a <code>Hello World!</code>
 response string.</p>


<h4 id="_registering_a_jax_rs_application">Registering a JAX-RS Application</h4>
<div class="section">
<p>You can also register the JAX-RS <code>Application</code> object.</p>

<markup
lang="java"
title="Register the <code>HelloWorld</code> resource"
>Routing.builder()
       .register("/jersey", <span class="conum" data-value="1" />
                 JerseySupport.builder(new MyApplication()) <span class="conum" data-value="2" />
                              .build())
       .build();</markup>

<ul class="colist">
<li data-value="1">Register the Jersey application at <code>/jersey</code> context root</li>
<li data-value="2"><code>MyApplication</code> handles requests made to /jersey context root.</li>
</ul>
</div>

<h4 id="_accessing_webserver_internals_from_a_jax_rs_application">Accessing WebServer Internals from a JAX-RS Application</h4>
<div class="section">
<p>You can inject WebServer request and response objects into your
JAX-RS application using <code>@Context</code>.</p>

<markup
lang="java"
title="Injection of WebServer internal objects"
>@Path("/")
@RequestScoped
public class HelloWorld {
    @Context
    private ServerRequest request;

    @Context
    private ServerResponse response;
}</markup>

</div>
</div>
</div>
</doc-view>