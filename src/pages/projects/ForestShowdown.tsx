import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectMeta from "@/components/ProjectMeta";

import heroImage from "@/assets/forest-showdown-hero.jpg";
import sceneryModelling from "@/assets/forest-showdown-scenery-modelling.png";
import environmentOverview from "@/assets/forest-showdown-environment-overview.png";
import hypershadeSetup from "@/assets/forest-showdown-hypershade.png";
import characterBlockout from "@/assets/forest-showdown-character-blockout.png";
import characterFinal from "@/assets/forest-showdown-character-final.png";
import characterRigging from "@/assets/forest-showdown-rigging.png";
import ikHandles from "@/assets/forest-showdown-ik-handles.png";
import cameraCloseup from "@/assets/forest-showdown-camera-closeup.png";
import cameraWide from "@/assets/forest-showdown-camera-wide.png";
import walkCycle from "@/assets/forest-showdown-walk-cycle.png";
import fightingPose from "@/assets/forest-showdown-fighting-pose.png";
import swordLocator from "@/assets/forest-showdown-sword-locator.png";
import swordIgnition from "@/assets/forest-showdown-sword-ignition.png";
import lightingBefore from "@/assets/forest-showdown-lighting-before.png";
import lightingAfter from "@/assets/forest-showdown-lighting-after.png";
import finalStill from "@/assets/forest-showdown-final-still.jpg";
import demoVideo from "@/assets/forest-showdown-demo.mp4";

interface DocImageProps {
  src: string;
  alt: string;
  caption: string;
}

/** Process screenshot — object-contain prevents Maya interface captures being cropped. */
const DocImage = ({ src, alt, caption }: DocImageProps) => (
  <figure className="my-8">
    <div className="rounded-md border border-border bg-secondary/40 p-3 md:p-4">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto max-h-[80vh] object-contain mx-auto"
      />
    </div>
    <figcaption className="mt-3 text-xs text-muted-foreground text-center">
      {caption}
    </figcaption>
  </figure>
);

const ForestShowdown = () => {
  return (
    <Layout>
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <article className="container-content">
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-16 inline-block"
          >
            ← Back to projects
          </Link>

          <h1 className="mb-5">Forest Showdown</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Creating a cinematic 3D animation from the ground up — using
            environment modelling, character rigging, keyframe animation,
            lighting, and camera direction to build tension without dialogue.
          </p>

          <ProjectMeta
            items={[
              { label: "Role", value: "3D Modeller, Rigger & Animator" },
              { label: "Output", value: "35-second animated short" },
              { label: "Tools", value: "Autodesk Maya · Hypershade" },
            ]}
          />

          {/* IMAGE 01 — HERO: final confrontation still from the animation. */}
          <figure className="my-8">
            <div className="rounded-md overflow-hidden border border-border bg-secondary/40">
              <img
                src={heroImage}
                alt="Two ape-like characters facing one another with light swords in a stylised moonlit forest"
                className="w-full h-auto object-contain"
                width={1822}
                height={1072}
              />
            </div>
          </figure>

          {/* Overview */}
          <CaseStudySection title="Overview">
            <p>
              Forest Showdown is a short 3D animation created for the CS4151
              Digital Modelling and Animation module. The project follows two
              custom-made ape-like characters meeting in a moonlit forest. One
              character slowly approaches while carrying an unignited double-edged
              light sword. The second character waits in a defensive position with
              a blue light sword already active. The animation ends at the moment
              the approaching character ignites their weapon, leaving the fight
              itself off-screen.
            </p>
            <p>
              The aim was not to create a long action sequence. I wanted to test
              whether modelling, movement, camera position, lighting, and pacing
              could communicate a clear story before any fight began. This made
              tension the central design problem: every part of the scene needed to
              support the feeling that the characters were moving towards an
              unavoidable confrontation.
            </p>
            <p>
              I produced the work from end to end in Autodesk Maya. This included
              modelling the environment and characters, applying textures in
              Hypershade, creating and binding a rig, adding IK handles, manually
              keyframing movement, attaching a prop with a locator, setting up
              cameras, and developing the final moonlit atmosphere. The project
              became an exercise in both visual storytelling and technical
              problem-solving.
            </p>
          </CaseStudySection>

          {/* Project Goal */}
          <CaseStudySection title="The Project Goal">
            <p>
              The core challenge was to create a complete and understandable
              fantasy scene using original 3D assets and a relatively simple
              sequence of actions. Because the animation contains no dialogue, the
              audience needed to understand the relationship between the two
              characters through posture, distance, camera framing, weapon states,
              and the movement of one character across the environment.
            </p>
            <p>
              I focused the project around three practical questions:
            </p>
            <div className="space-y-3 mt-4">
              <p>
                <strong>1.</strong> How can a stylised environment establish a
                convincing fantasy setting without distracting from the characters?
              </p>
              <p>
                <strong>2.</strong> How can rigging, IK handles, and keyframes be
                combined to produce a readable walking and posing sequence?
              </p>
              <p>
                <strong>3.</strong> How can camera movement and lighting build
                suspense before the final reveal?
              </p>
            </div>
          </CaseStudySection>

          {/* Role */}
          <CaseStudySection title="My Role">
            <p>
              This was an individual project, so I was responsible for the full
              production process. I developed the concept, planned the setting,
              modelled the scenery and characters, prepared the moving character
              for animation, created the movement sequence, positioned the
              cameras, and developed the final lighting setup.
            </p>
            <p>
              The project required me to move between creative and technical
              decisions. I had to decide what the scene should communicate, while
              also understanding how mesh construction, scene organisation,
              skeleton placement, IK controls, locators, keyframes, and lighting
              would make that idea function in practice.
            </p>
          </CaseStudySection>

          {/* Production Approach */}
          <CaseStudySection title="Production Approach">
            <p>
              I divided the project into a sequence of connected production stages.
              This helped me move from a broad narrative idea towards a finished
              animation while learning how decisions made early in Maya affected
              later stages of the workflow.
            </p>

            <div className="mt-6 divide-y divide-border border-y border-border">
              {[
                [
                  "1. Establish the story and setting",
                  "Defined a short fantasy confrontation built around anticipation rather than combat. I planned a moonlit forest, two opposing characters, and an ending based on the delayed ignition of the approaching character's weapon.",
                ],
                [
                  "2. Model and texture the scene",
                  "Created reusable low-poly scenery elements, arranged the forest layout, modelled both character forms, and used Hypershade to establish grass, fur, colour, and lighting-related variation across the environment.",
                ],
                [
                  "3. Prepare the moving character",
                  "Built a skeleton for the approaching character, bound the rig to the mesh, and added IK handles so the limbs could be positioned more efficiently during animation.",
                ],
                [
                  "4. Animate and direct the sequence",
                  "Used keyframes to move the character through the scene, developed a manual walk cycle, changed the arm pose from relaxed to fight-ready, attached the weapon with a locator, and planned the camera progression.",
                ],
                [
                  "5. Build atmosphere and finish",
                  "Added a moon object, directional and volume lighting, darker and lighter areas of the forest, and a final weapon-ignition moment to complete the suspenseful ending.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-8 py-4"
                >
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          {/* Creative Direction */}
          <CaseStudySection title="Creative Direction &amp; Visual Storytelling">
            <p>
              The visual direction combined anthropomorphic characters with a
              science-fantasy weapon concept. I was interested in the contrast
              between an unusual, slightly playful character design and a serious,
              tense confrontation. The scene therefore needed to feel stylised,
              but the character positions and pacing still had to make the danger
              understandable.
            </p>
            <p>
              I deliberately withheld the fight. The approaching character begins
              without an active weapon, while the character at the opposite side of
              the forest is already prepared. As the distance closes, the camera
              reveals more of the scene and the character's arms gradually shift
              from a relaxed position towards a wider fighting stance. The final
              ignition acts as the conclusion of the animation and the beginning of
              an event the viewer does not see.
            </p>
          </CaseStudySection>

          {/* Environment Modelling */}
          <CaseStudySection title="Environment Modelling">
            <p>
              I began by modelling the main scenery assets in Maya. Pine trees and
              cliff forms were developed by manipulating cube meshes into simple,
              reusable low-poly shapes. I then added rocks, a cave, and a spherical
              moon to make the environment feel more complete and to support the
              intended night-time setting.
            </p>
            <p>
              The reusable scenery approach allowed me to build the forest by
              repeating and repositioning a smaller group of assets rather than
              modelling every object separately. I placed the cliffs, cave, rocks,
              and brighter trees towards the background seen during the character's
              walk. A denser and darker tree line was placed behind the waiting
              character to suggest an unknown area of wilderness beyond them.
            </p>

            {/* IMAGE 02 — PLACE AFTER the paragraph explaining the reusable scenery assets. */}
            <DocImage
              src={sceneryModelling}
              alt="Autodesk Maya viewport showing early low-poly tree and cliff models created from polygon meshes"
              caption="Early scenery modelling in Maya: reusable tree and cliff forms created before assembling the full environment."
            />

            {/* IMAGE 03 — PLACE AFTER the paragraph describing the full forest arrangement. */}
            <DocImage
              src={environmentOverview}
              alt="Overhead Maya viewport showing the completed forest scene with trees, cliffs, rocks, cave, and open character path"
              caption="The assembled environment, with a clear path for the approaching character and darker woodland behind the opponent."
            />
          </CaseStudySection>

          {/* Texturing */}
          <CaseStudySection title="Texturing &amp; Scene Readability">
            <p>
              I used Hypershade to apply the grass texture, character fur, and the
              main colours across the environment. The texturing was not only used
              for surface detail. It also helped separate areas of the scene and
              establish which parts of the forest were intended to receive more
              moonlight.
            </p>
            <p>
              Trees in the upper section of the environment were given a brighter
              appearance, while the lower and more enclosed area of the forest was
              kept darker. This supported the eventual lighting setup and helped
              the viewer read the open route of the walking character against the
              denser forest surrounding the waiting character.
            </p>

            {/* IMAGE 04 — PLACE IN the texturing section, after explaining Hypershade. */}
            <DocImage
              src={hypershadeSetup}
              alt="Maya Hypershade workspace showing the material network and grass texture used in the forest scene"
              caption="Hypershade material setup used to manage the grass texture and the scene's colour treatment."
            />
          </CaseStudySection>

          {/* Character Modelling */}
          <CaseStudySection title="Character Modelling">
            <p>
              I wanted the protagonists to feel like furry, anthropomorphic
              creatures that could belong in a fantasy animation. I began with a
              cube polygon and gradually manipulated the mesh into a body-like
              form. I then developed the head, hands, feet, and facial features,
              before smoothing the mesh to create a less angular appearance.
            </p>
            <p>
              The completed model was duplicated for the two roles. Rather than
              building a second character from the beginning, I changed the colour
              treatment of the opponent to a greyer appearance. This created a
              basic visual distinction and connected that character more closely
              with the darker side of the forest.
            </p>

            {/* IMAGE 05 — PLACE AFTER describing the first body blockout. */}
            <DocImage
              src={characterBlockout}
              alt="Early character blockout in Maya showing the basic body shape before texturing and facial detail"
              caption="Initial character blockout developed by reshaping a polygon mesh into a body, limbs, hands, and feet."
            />

            {/* IMAGE 06 — PLACE AFTER describing the completed character model. */}
            <DocImage
              src={characterFinal}
              alt="Completed textured ape-like character model standing in the Maya viewport"
              caption="The completed character model with fur treatment, facial features, and a smoothed body form."
            />
          </CaseStudySection>

          {/* Rigging */}
          <CaseStudySection title="Rigging for Movement">
            <p>
              Only the approaching character required a complete rig. The waiting
              character remained mostly stationary, so their small arm and weapon
              adjustments could be animated manually. Concentrating the rigging
              work on the moving character kept the production focused on the part
              of the scene that required the greatest amount of controlled motion.
            </p>
            <p>
              I created a skeleton-like joint structure inside the character and
              bound it to the mesh. This gave me a controllable internal framework
              for the walk sequence. I then added IK handles to the limbs so that I
              could position the hands and feet while allowing connected joints to
              respond together.
            </p>

            {/* IMAGE 07 — PLACE AFTER explaining the skeleton and mesh binding. */}
            <DocImage
              src={characterRigging}
              alt="Maya viewport showing the character beside its internal skeletal rig during the rigging process"
              caption="Building and checking the character rig before beginning the animated walk sequence."
            />

            {/* IMAGE 08 — PLACE AFTER explaining why IK handles were added. */}
            <DocImage
              src={ikHandles}
              alt="Rigged character in Maya with visible IK controls attached to the limbs"
              caption="IK handles added to the character's limbs to support more direct control of the walk and arm poses."
            />
          </CaseStudySection>

          {/* Camera */}
          <CaseStudySection title="Camera Direction &amp; Composition">
            <p>
              The camera was treated as part of the storytelling rather than as a
              neutral recording tool. The animation begins with a close view of the
              approaching character. This keeps attention on their movement and
              delays the audience's understanding of the full confrontation.
            </p>
            <p>
              As the character advances, the view opens into a wider composition
              that shows both rivals positioned across the forest. The change in
              scale expands the scene at the point when the conflict becomes clear.
              It also allows the distance between the characters to function as a
              visual countdown: each step reduces the space between them and moves
              the sequence closer to the final weapon ignition.
            </p>

            {/* IMAGE 09 — PLACE AFTER the close-up camera explanation. */}
            <DocImage
              src={cameraCloseup}
              alt="Maya camera view showing a close shot of the walking character framed by trees and rocks"
              caption="The closer opening composition keeps attention on the approaching character before revealing the opponent."
            />

            {/* IMAGE 10 — PLACE AFTER the wide confrontation explanation. */}
            <DocImage
              src={cameraWide}
              alt="Wide Maya camera view showing both characters facing each other across the dark forest"
              caption="The wider confrontation shot reveals both characters and makes the approaching distance central to the scene."
            />
          </CaseStudySection>

          {/* Animation */}
          <CaseStudySection title="Animating the Walk Cycle">
            <p>
              I animated the approaching character manually with keyframes. I
              first moved the whole body across the required path and then created
              the leg movement through the IK handles. This order became important
              because the character needed a stable overall direction before the
              individual limb positions could be refined.
            </p>
            <p>
              My first attempt exposed a technical problem. I moved the limbs
              before moving the full character towards the destination, which
              caused the model to become heavily contorted. I corrected this by
              reversing the order of work: first establishing the movement of the
              complete body, and only then adjusting the legs and feet around that
              motion. This was a valuable lesson in how animation controls depend
              on one another and how workflow order can directly affect the result.
            </p>
            <p>
              After establishing the leg movement, I animated the arms more
              gradually. The character begins with their arms close to the body and
              the inactive weapon held calmly. Midway through the sequence, the
              arms begin moving outward. By the end, the character has adopted a
              broader stance that visually prepares them for the implied fight.
            </p>

            {/* IMAGE 11 — PLACE AFTER explaining the corrected walk-cycle workflow. */}
            <DocImage
              src={walkCycle}
              alt="Maya animation workspace showing the walking character with timeline keyframes and IK-controlled legs"
              caption="Manual walk-cycle development using whole-body translation, limb keyframes, and IK-controlled leg positions."
            />

            {/* IMAGE 12 — PLACE AFTER explaining the transition into a fighting pose. */}
            <DocImage
              src={fightingPose}
              alt="Maya viewport showing the approaching character with arms moving into a wider fighting position"
              caption="Later pose in the sequence: the arms open from a relaxed stance into a fight-ready position."
            />
          </CaseStudySection>

          {/* Props */}
          <CaseStudySection title="Prop Attachment &amp; Weapon Animation">
            <p>
              The approaching character's inactive light sword needed to move with
              the hand throughout the walk. I created a locator and connected the
              weapon to the relevant limb so that it followed the character rather
              than requiring independent repositioning at every frame.
            </p>
            <p>
              The waiting character required less movement, so I adjusted the blue
              weapon manually alongside the arm. At the end of the animation, I
              keyframed the red double-edged weapon so that its blades appeared to
              ignite. This final change in colour and form was designed as the
              strongest visual event in the sequence and the point at which the
              animation cuts away.
            </p>

            {/* IMAGE 13 — PLACE AFTER explaining the locator-based prop attachment. */}
            <DocImage
              src={swordLocator}
              alt="Maya viewport showing the inactive light sword positioned to follow the walking character's hand through a locator"
              caption="A locator was used to make the inactive weapon follow the character's hand during the walk."
            />

            {/* IMAGE 14 — PLACE AFTER explaining the final weapon ignition. */}
            <DocImage
              src={swordIgnition}
              alt="Maya viewport showing the final red double-edged light sword ignition beside the opposing blue weapon"
              caption="The keyframed red weapon ignition creates the final reveal and ends the story at the moment before combat."
            />
          </CaseStudySection>

          {/* Lighting */}
          <CaseStudySection title="Lighting &amp; Atmosphere">
            <p>
              Lighting was essential to communicating the intended night-time
              setting. I modelled a white sphere as a visible moon and then used
              directional and volume lighting to create the suggestion that light
              was travelling from the upper part of the scene into the forest.
            </p>
            <p>
              The finished setup intentionally leaves the lower woodland darker,
              while the cliffs, cave, trees, and parts of the character path receive
              more illumination. This strengthened the contrast between the open
              path of the approaching character and the shadowed area occupied by
              the opponent. It also helped the blue and red weapons stand out as
              focal points against the environment.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              {/* IMAGE 15A — BEFORE LIGHTING. */}
              <figure>
                <div className="rounded-md border border-border bg-secondary/40 p-3">
                  <img
                    src={lightingBefore}
                    alt="Forest scene in Maya before the final moonlight setup was applied"
                    loading="lazy"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-muted-foreground text-center">
                  Before: the environment without the intended moonlit contrast.
                </figcaption>
              </figure>

              {/* IMAGE 15B — AFTER LIGHTING. */}
              <figure>
                <div className="rounded-md border border-border bg-secondary/40 p-3">
                  <img
                    src={lightingAfter}
                    alt="Forest scene in Maya after the final moonlight and directional lighting setup"
                    loading="lazy"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-muted-foreground text-center">
                  After: directional and volume lighting establish the night-time atmosphere.
                </figcaption>
              </figure>
            </div>
          </CaseStudySection>

          {/* Featured Skill */}
          <CaseStudySection title="Featured Skill: Technical Problem-Solving Through Animation">
            <p>
              The strongest skill demonstrated by this project was my ability to
              work through a technical production problem rather than abandoning
              the intended movement. The first walk-cycle setup failed because I
              approached the controls in the wrong order. The limbs had already
              been repositioned before the overall character translation was
              established, causing the mesh and rig to contort.
            </p>
            <p>
              I diagnosed the problem by separating the movement into levels:
              whole-character movement first, limb movement second, and pose
              refinement third. Rebuilding the sequence in that order produced a
              usable walk and gave me a clearer understanding of the relationship
              between a rig, its IK controls, and global movement. The final result
              was not created through a single perfect attempt. It came from
              observing a failure, identifying its cause, and restructuring the
              workflow.
            </p>
            <p>
              That same problem-solving approach continued throughout the project:
              using repeated scenery assets to manage the environment, rigging only
              the character that required complex movement, attaching the weapon
              with a locator, and using camera and lighting decisions to communicate
              story without increasing the length or complexity of the animation.
            </p>
          </CaseStudySection>

          {/* Final Outcome */}
          <CaseStudySection title="Final Outcome">
            <p>
              The final output is a 35-second animated short that moves from a
              close character introduction into a wider confrontation. The sequence
              communicates a clear beginning, build-up, and stopping point: the
              approach through the forest, the reveal of the waiting opponent, and
              the ignition of the second weapon.
            </p>
            <p>
              The finished piece brought together several separate Maya skills in
              one connected workflow: polygon modelling, scene assembly,
              Hypershade materials, character rigging, IK handles, keyframe
              animation, prop constraints, camera direction, and lighting. More
              importantly, these techniques were used to support a specific
              narrative effect rather than being shown as isolated exercises.
            </p>

            {/* VIDEO — PLACE HERE so the viewer sees the result after the full process walkthrough. */}
            <figure className="my-8">
              <div className="rounded-md overflow-hidden border border-border bg-black">
                <video
                  controls
                  preload="metadata"
                  poster={finalStill}
                  className="w-full h-auto"
                >
                  <source src={demoVideo} type="video/mp4" />
                  Your browser does not support the embedded video.
                </video>
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground text-center">
                Final Forest Showdown animation — approximately 35 seconds.
              </figcaption>
            </figure>
          </CaseStudySection>

          {/* What I Learned */}
          <CaseStudySection title="What I Learned">
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  1. Workflow order matters
                </h3>
                <p>
                  Moving the whole character before refining the limb animation
                  produced a far more stable result. This taught me to think about
                  global movement and local controls as separate stages.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  2. Rig only what the story requires
                </h3>
                <p>
                  The waiting character did not need a full movement system. By
                  rigging the walking character and manually adjusting the smaller
                  secondary movement, I kept the work proportionate to the scene.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  3. Scene organisation affects later production
                </h3>
                <p>
                  Bringing assets between Maya files and leaving some elements
                  insufficiently labelled made the project harder to manage. A more
                  consistent naming and file structure would make future animation
                  work more efficient and less error-prone.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  4. Camera and lighting can carry the narrative
                </h3>
                <p>
                  The animation depended on atmosphere and anticipation rather than
                  dialogue. Framing, darkness, distance, and weapon colour therefore
                  became essential storytelling tools.
                </p>
              </div>
            </div>
          </CaseStudySection>

          {/* Reflection */}
          <CaseStudySection title="Reflection">
            <p>
              The project successfully communicated the story I planned: one
              character advances through a forest, the opponent waits, and the
              scene ends immediately before a fight. I was pleased with the overall
              environment, lighting direction, camera progression, and the way the
              final ignition gives the sequence a clear conclusion.
            </p>
            <p>
              There are also clear areas I would improve. The two characters are
              based on the same model and would benefit from stronger differences
              in silhouette, proportions, clothing, or facial design. The walk cycle
              could be refined so that the legs move in better synchronisation and
              the body weight feels more natural. I would also create and label all
              assets within a more carefully organised Maya project rather than
              transferring elements between separate files.
            </p>
            <p>
              Even with those limitations, Forest Showdown gave me practical
              experience of taking a 3D scene through the complete production
              process. It showed me that a convincing result depends not only on
              individual modelling or animation techniques, but on how the
              environment, rig, movement, camera, props, and lighting work together
              to communicate one idea.
            </p>
          </CaseStudySection>

          {/* Project Links */}
          <CaseStudySection title="Project Links">
            <div className="flex flex-wrap gap-3 not-prose">
              <a
                href={demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                View Animation
              </a>
              <a
                href="/documents/forest-showdown-project-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                Project Report
              </a>
            </div>
          </CaseStudySection>

          {/* Footer nav — adjust the neighbouring route if your project order is different. */}
          <div className="section-divider mt-10 pt-6 flex justify-between text-sm">
            <Link
              to="/projects"
              className="font-medium hover:text-accent transition-colors"
            >
              ← All projects
            </Link>
            <Link
              to="/projects/mindspark"
              className="font-medium hover:text-accent transition-colors"
            >
              Previous: MindSpark →
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default ForestShowdown;
